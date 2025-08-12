import express from "express";
import { pool } from "./conexion_db.js";
import cors from "cors";

//Usamos express para poder crear las rutas
const app = express();
//Esto es lo que permite que express lea la informacion que llega en formato json para luego crearlo en un objeto
app.use(express.json());
//Permite que el back sea conusmido por el front
app.use(cors());

//El siguiente bloque de codigo demuestra como se crea cada ruta para luego ser usada en el front

//GET
app.get("/usuarios", async (request, response) => {
  try {
    //Aqui haremos la consulta para que la informacion se a mostradada
    const [line] = await pool.query(` SELECT * FROM usuarios`);

    return response.json(line);
  } catch (error) {
    response.status(500).json({
      status: "error",
      endpoint: request.originalUrl,
      method: request.method,
      message: error.message,
    });
  }
});

app.get("/usuarios/:id_usuario", async (request, response) => {
  try {
    const query = `SELECT * FROM usuarios WHERE id_usuario = ?`;
    const { id_usuario } = request.params;

    //Aqui haremos la consulta para que la informacion se a mostradada
    const [line] = await pool.query(query, id_usuario);

    return response.json(line[0]);
  } catch (error) {
    response.status(500).json({
      status: "error",
      endpoint: request.originalUrl,
      method: request.method,
      message: error.message,
    });
  }
});

//POST
app.post("/usuarios", async (request, response) => {
  try {
    const { nombre_completo, identificacion, correo, telefono } = request.body;

    const query = `INSERT INTO usuarios(nombre_completo, identificacion, correo, telefono) 
    VALUES (?, ?, ?, ?)`;

    const values = [nombre_completo, identificacion, correo, telefono];

    const [result] = await pool.query(query, values);

    response.status(201).json({
      mensaje: "usuario creado exitosamente",
    });
  } catch (error) {
    response.status(500).json({
      status: "error",
      endpoint: request.originalUrl,
      method: request.method,
      message: error.message,
    });
  }
});

//PUT

app.put("/usuarios/:id_usuario", async (request, response) => {
  try {
    const { id_usuario } = request.params;

    const { nombre_completo, identificacion, correo, telefono } = request.body;

    const query = `UPDATE usuarios SET
        nombre_completo = ?,
    identificacion  = ?,
    correo  = ?,
    telefono  = ?
    WHERE id_usuario = ?`;

    const values = [nombre_completo, identificacion, correo, telefono, id_usuario];

    const [result] = await pool.query(query, values);

    if (result.affectedRows != 0) {
      return response.json({ mensaje: "usuario actualizado" });
    }
  } catch (error) {
    response.status(500).json({
      status: "error",
      endpoint: request.originalUrl,
      method: request.method,
      message: error.message,
    });
  }
});
//DELETE
app.delete("/usuarios/:id_usuario", async (request, response)=>{
try {
    const { id_usuario } = request.params

    const query = `DELETE FROM usuarios WHERE id_usuario = ?`

    const values = [id_usuario]

    const [result] = await pool.query(query,values)
     if (result.affectedRows != 0) {
            return response.json({ mensaje: "usuario eliminado" })
        }
    }
  catch (error) {
    response.status(500).json({
      status: "error",
      endpoint: request.originalUrl,
      method: request.method,
      message: error.message,
    });
  }



})

app.listen(3000, () => {
  console.log("the server has been activing, endPoint http://localhost:3000");
});
