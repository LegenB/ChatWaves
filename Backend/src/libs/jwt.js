import { TOKEN_SECRET } from "../config.js";
import jwt from "jsonwebtoken"

export function CreateToken( payload ) {

   return new Promise((resolve, reject) => {

        //Crear un Token
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {expiresIn: '1d'},
            (err, token) =>{

                if (err) {
                    reject(err)
                };

                resolve(token)

            }
        );
   })  
}