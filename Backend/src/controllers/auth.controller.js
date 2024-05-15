import { Conectclient } from "../DataBase.js";
import {HowEmailExist} from "../middlewares/auth.register.js"
import {ThisEmailExist} from "../middlewares/auth.loginEmail.js"
import {LoginUser} from "../middlewares/auth.login.js"
import bcrypt from "bcryptjs";
import { CreateToken } from "../libs/jwt.js";

export const register = async (req, res) => {
    // Se extraen los datos que son mandados por el frontend
    //Chatglobal es id debe ser 001
    const {nombre, email, password, fecha_nacimiento} = req.body
    
    try {
        const emailExists = await HowEmailExist(email);
    
        if (emailExists[0]) { // Si el Email existe tirar un error
           
            res.status(400).send("El correo electrónico ya está registrado");
        } 
        else { 
    
            try {
                //Generar un ID unico
                const NombreID = (nombre.substr(0,3)).toUpperCase()
                const newID = (emailExists[1] + 1 +`_${NombreID}`)
                //console.log(newID)

                // Encriptar contraseña     
                const passwordHashs = await bcrypt.hash(password,10);

                // Insertar en el nuevo usuario a la Base de Datos
                const response = await Conectclient.execute(
                `INSERT INTO usuario (id_usuario, nombre, email, password, fecha_nacimiento, estado, chatglobal_id_chat_global) 
                VALUES ('${newID}', '${nombre}', '${email}', '${passwordHashs}', '${fecha_nacimiento}','Hi, I am new to ChatWaves', '001')`)
                
                // Llamamos la Promesa Crear token
                const token = await CreateToken({id: newID})
                res.cookie('token', token);
                
                //console.log(response)
                res.json({
                    ID: newID,
                    nombre: nombre,
                    email: email
                })     
            } 
            catch (error)  {
                res.status(500).json({message: error.message});
            
            }
        }

    } 
    catch (error) {
        console.error("Error:", error)
    } 
    
}


export const login = async (req, res) => {

    try {
        // Se extraen los datos que son mandados por el frontend
        const { email, password} = req.body

        // Validar Que el correo existe
        const EmEx = await ThisEmailExist(email)
        if (!EmEx) { // Si no existe
            return res.status(400).json({message: "User not Found "});
        }
       
        // Validar Contraseña
        const UserLogin = await LoginUser(email, password)
        if (!UserLogin) { // Si Contraseña es incorrecta
            return res.status(400).json({message: "Password incorrect"});
        }
        console.log(UserLogin)

        const token = await CreateToken({id: UserLogin.id_usuario})
        res.cookie("token", token)
        res.json({
            ID: UserLogin.id_usuario,
            nombre: UserLogin.nombre,
            email: UserLogin.email
        });

    } 
    catch (error) {
        console.error("Error:", error)
    } 
    
}


export const logout = async (req, res) => {
    res.cookie('token',"",{
        expires: new Date(0)
    })
    return res.sendStatus(200);
}
