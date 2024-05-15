import { Conectclient } from "../DataBase.js";




export async function HowEmailExist(email) {
    const Emails = await Conectclient.execute(`SELECT email FROM usuario`);
    const DB_Emails = Emails.rows;
    const newID = DB_Emails.length
    let exist = false;

    DB_Emails.forEach(e => {
        if (email === e.email) {
            exist = true;
        }
    });

    return [exist, newID];
}


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

