import { Conectclient } from "../DataBase.js";


export async function EmailExist(email) {
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