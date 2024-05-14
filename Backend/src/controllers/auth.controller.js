import { Conectclient } from "../DataBase.js";
import {EmailExist} from "../middlewares/auth.register.js"
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    // Se extraen los datos que son mandados por el frontend
    //Chatglobal es id debe ser 001
    const {nombre, email, password, fecha_nacimiento, estado} = req.body


    try {
        const emailExists = await EmailExist(email);
        

        if (emailExists[0]) {
           
            res.status(400).send("El correo electrónico ya está registrado");
        } 
        else {
            

            try {
                //Generar un iD unico
                const NombreID = (nombre.substr(0,3)).toUpperCase()
                console.log(NombreID)
                const newID = (emailExists[1] + 1 +`_'${NombreID}'`)

                // Encriptar contraseña
                console.log(newID)
                const passwordHashs = await bcrypt.hash(password,10);

                const response = await Conectclient.execute(
                `INSERT INTO usuario (id_usuario, nombre, email, password, fecha_nacimiento, estado, chatglobal_id_chat_global) 
                VALUES ('${newID}', '${nombre}', '${email}', '${passwordHashs}', '${fecha_nacimiento}', '${estado}', '001')`)
                //console.log(response)
                res.send("Registrado")
              
            } 
             catch (error)  {
                console.error("Error al ejecutar la consulta:", error);
                res.send("Error el id ya existe ")
            }
        }
        
    } catch (error) {
        console.error("Error:", error)
    } 
    
}


export const login = (req, res) => res.send("login");

