import jwt from "jsonwebtoken";
import {TOKEN_SECRET} from "../config.js";

// Los midelware son funciones que se ejecutan antes de llegar a otra rutas
// req me da informacion de la peticion
// res envio una respuesta
// next en lugar de dar una respuea al cliente le informo que continue la ejecucion de la ruta

export const authRequired = (req, res, next) =>{
    console.log('Validing token...')
    const {token} = req.cookies
   

    if (!token) {
        return res.status(401).json({message : "No token, authorization denied"})
    }
    jwt.verify(token, TOKEN_SECRET, (err, decode) =>{
        if (err) {
            return res.status(401).json({message : "Invalid Token"})
        }
        req.user = decode;
        next()
    })
    


}