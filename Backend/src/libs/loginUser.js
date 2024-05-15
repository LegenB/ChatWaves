import { Conectclient } from "../DataBase.js";
import bcrypt from "bcryptjs";


export async function  LoginUser(Email, password) {
    
    //Consultar en la base de datos por el email y contraseña del usuario
    const ClientEmail = await Conectclient.execute(
        `SELECT id_usuario, nombre, email, password FROM usuario
        WHERE email = '${Email}'`
    );

    const ClientPass = ClientEmail.rows[0].password
    const isMatch = await bcrypt.compare(password, ClientPass); // Comparar contraseñas encriptadas

    if (!isMatch){  // Si la contraseña es incorrecta devuelve un bool en Falso
        return isMatch
    }
    else{           // Si la contraseña es correcte devuelve los datos del usuario
        const Userlog = ClientEmail.rows[0]; // obtener datos para crear el token de autenticacion
        return Userlog 
    }

}