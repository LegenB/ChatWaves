import dotenv from 'dotenv';
dotenv.config();

import { createClient } from "@libsql/client";


//Conexion a la base de datos
export const Conectclient = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});



const response = await Conectclient.execute("SELECT * FROM chatglobal");


console.log(response);