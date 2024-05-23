import { Conectclient } from "../DataBase.js";

import { formatoFecha } from "../libs/utils.js";

export const CreateMessage = async (req, res) => {

    const {usuario_id_usuario, contenido, fecha_envio} = req.body

    try {

        try {
            
            const resp = await Conectclient.execute(
                `SELECT * FROM mensaje_global `);
    
            const messages =  resp.rows
            
            let messageId = messages.length + 1
              
            let fecha_envio = Date();
            const dt = formatoFecha(fecha_envio,"dd/mm/yy hh:MM:ss");
            // Subir un mensaje a la base de datos
            const response = await Conectclient.execute(
            `INSERT INTO mensaje_global (id_mensaje, usuario_id_usuario, contenido, fecha_envio,chatglobal_id_chat_global) 
            VALUES ('${messageId}', '${usuario_id_usuario}', '${contenido}', '${dt}','001')`)

            //Id se auto genera 

            res.json({
                contenido: contenido,
                fecha_envio: dt
            })   
  
        }
    
        catch (error) {
            return res.status(500).json({ message: "Error to send the message!"});
        } 
      

       
    } 
    catch (error) {
        return res.status(500).json({ message: "Server Error!!"});
    } 
    
}

export const GetAllMessages = async (req, res) => {

    try {
        const response = await Conectclient.execute(
            `SELECT * FROM mensaje_global ORDER BY fecha_envio `);

        const messages =  response.rows
        
        res.json(messages)  
    }

    catch (error) {
        return res.status(500).json({ message: "Server Error!!"});
    } 
    
    
}

