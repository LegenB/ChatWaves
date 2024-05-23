import { Conectclient } from "../DataBase.js";

import { formatoFecha } from "../libs/utils.js";

export const CreateMessage = async (req, res) => {

    const {id_mensaje, usuario_id_usuario, contenido} = req.body

    try {

        let fecha_envio = Date();
        const dt = formatoFecha(fecha_envio,"dd/mm/yy hh:MM:ss");
        // Subir un mensaje a la base de datos
        const response = await Conectclient.execute(
        `INSERT INTO mensaje_global (id_mensaje, usuario_id_usuario, contenido, fecha_envio,chatglobal_id_chat_global) 
        VALUES ('${id_mensaje}', '${usuario_id_usuario}', '${contenido}', '${dt}','001')`)

        //Id se auto genera 

        res.json({
            contenido: contenido,
            fecha_envio: dt
        })   


       
    } 
    catch (error) {
        return res.status(500).json({ message: "Server Error!!"});
    } 
    
}

export const GetMessages = async (req, res) => {

    const response = await Conectclient.execute(
        `SELECT * FROM mensaje_global ORDER BY fecha_envio; `)

    let fecha_envio = Date();
    formatoFecha(fecha_envio,"dd/mm/yy hh:MM:ss");



    
    
}

