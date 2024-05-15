import { Conectclient } from "../DataBase.js";


export async function ThisEmailExist(email) {
    const exist = false;
    const ClientEmail = await Conectclient.execute(
        `SELECT email FROM usuario
        WHERE email = '${email}'`
    );
    
    if (ClientEmail.rows.length === 0) {
        //console.log('No existe')
    } else {
        console.log('Existe')
        return true;
    }
    
    return exist;
    
}