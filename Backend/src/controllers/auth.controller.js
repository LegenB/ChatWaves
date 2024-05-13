import { Conectclient } from "../DataBase.js";
import {EmailExist} from "../middlewares/auth.register.js"
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    // Se extraen los datos que son mandados por el frontend
    //Chatglobal es id debe ser 001
    const {nombre, email, password, fecha_nacimiento, estado} = req.body


    try {
        const emailExists = await EmailExist(email);


        if (emailExists) {
           
            res.status(400).send("El correo electrónico ya está registrado");
        } 
        else {
            try {
                // Encriptar contraseña
                const passwordHashs = await bcrypt.hash(password,10);

                const response = await Conectclient.execute(
                `INSERT INTO usuario (id_usuario, nombre, email, password, fecha_nacimiento, estado, chatglobal_id_chat_global) 
                VALUES (03, '${nombre}', '${email}', '${passwordHashs}', '${fecha_nacimiento}', '${estado}', '001')`)
                //console.log(response)
                res.send("Registrado")
              
            } 
             catch (error)  {
                console.error("Error al ejecutar la consulta:", error);
                res.send("Error el id ")
            }
  
        }
    } catch (error) {
        console.error("Error:", error)
    } 
    
}


export const login = (req, res) => res.send("login");

