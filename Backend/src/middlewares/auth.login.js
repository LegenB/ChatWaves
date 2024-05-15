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

    if (!isMatch){  // si es correcta devuelve Falso
        return isMatch
    }
    else{           // Si es correcta devuelve los datos
        const Userlog = ClientEmail.rows[0]; // obtener datos para crear el token de autenticacion
        return Userlog 
    }

}