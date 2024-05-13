import { Conectclient } from "../DataBase.js";

export const register = async (req, res) => {
    // Se extraen los datos que son mandados por el frontend
    //Chatglobal es id debe ser 001
    const {nombre, email, password, fecha_nacimiento, estado, chatglobal_id_chat_global} = req.body

    try {
        const response = await Conectclient.execute(
        `INSERT INTO usuario (id_usuario, nombre, email, password, fecha_nacimiento, estado, chatglobal_id_chat_global) 
        VALUES (20, '${nombre}', '${email}', '${password}', '${fecha_nacimiento}', '${estado}', '${chatglobal_id_chat_global}')`)
    
        console.log(response)
        res.send("Registrado")
      
    } 
     catch (error)  {
        console.error("Error al ejecutar la consulta:", error);
        res.send("Upss problemas....")
    }
      
}


export const login = (req, res) => res.send("login");

