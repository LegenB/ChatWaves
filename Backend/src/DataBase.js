import dotenv from 'dotenv';
dotenv.config();

import { createClient } from "@libsql/client";


//Conexion a la base de datos
export const Conectclient = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

async function INSERT() {
  try {
    const response = await Conectclient.execute(
      `INSERT INTO usuario (id_usuario, nombre, email, password, fecha_nacimiento, estado, chatglobal_id_chat_global) VALUES (20, 'Juan', 'juan@example.com', 'contraseña123', '1990-01-01', 'activo', '001')`)

    console.log(response)

  } 
  catch (error)  {
    console.error("Error al ejecutar la consulta:", error);
  }

}


async function consultarDatos() {
  try {
    const response = await Conectclient.execute("SELECT * FROM chatglobal");
    console.log(response); // o haz algo con los datos recibidos
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
  }
}

