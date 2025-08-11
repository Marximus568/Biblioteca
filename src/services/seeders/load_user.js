//Este archivo cargara los datos de user que se encuentran en formato csv


import fs from 'fs'; // es la que me permite leer archivos, puede leer diferentes tipos de archivos segun lo asignado
import path from 'path'; // esta muestra la ruta actual
import csv from 'csv-parser'; //Libreria necesaria para que pueda leer el formato csv
import { pool } from "../conexion_db.js" //Es la que permite la conexion a la db, OJO como pool no se encuentra en la misma carpeta, hay que usar "../" y siempre pone .js


export async function uploadForDb() {
//Primer paso, busca el archivo que buscas subir al mysql
    const rute = path.resolve('src/services/data/Biblioteca_db.csv');
    const user = [];

    return new Promise((resolve, reject) => {
        fs.createReadStream(rute)
            .pipe(csv())
            .on("data", (line) => {
                //Paso 2, con el metodo push, pasar los encabezados de cada columna, estos deben coincidir entre si
                user.push([
                    line.id_usuario,
                    line.nombre_completo.trim(),
                    line.identificacion,
                    line.correo,
                    line.telefono
                ]);
            })
            .on('end', async () => {
                try {
                    //Paso 3, escribiras tal cual como insertas datos en el DBMS
                    const sql = 'INSERT INTO usuarios (id_usuario,nombre_completo,identificacion,correo,telefono) VALUES ?';
                    const [result] = await pool.query(sql, [user]);

                    //Con el metodo affectedRows, el sistema se dara cuenta que alteramos las filas y nos enviara la cantidad de filas afectadas
                    console.log(`✅ Se insertaron ${result.affectedRows} usuarios.`);
                    resolve(); // Termina exitosamente
                } catch (error) {
                    console.error('❌ Error al insertar usuarios:', error.message);
                    reject(error);
                }
            })
            .on('error', (err) => {
                console.error('❌ Error al leer el archivo CSV de usuarios:', err.message);
                reject(err);
            });
    });
}