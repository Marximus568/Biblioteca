import mysql from "mysql2/promise"
//mysql2 cuando se usa su libreria no se pone automaticamente y toca ponerlo manual, NOTA no olvidar poner PROMISE luego de escribir mysql2


//lo siguiente es la creacion de una variable que contara con el acceso a la base de datos para que luego podemos hacer lo que deseemos
//Dentro del createPool haremos un objeto
 export const pool = mysql.createPool({
    host: "localhost",
    database:"Biblioteca",
    password:"1234",
    user:"root",
    port:3306,
    connectionLimit:10, //Controla la cantidad de conexiones activas al mismo tiempo
    waitForConnections: true, //Cuando se cumple el limite de conexiones, como se encuentra en true hara que los usuarios se pongan
    queueLimit:0 //Numero maximo de peticiones en espera (0=sin limite)
})

//Todo el bloque de codigo anterior es para que el sistema pueda acceder a la base de datos

//Para testear
async function testeo() {
    try {
        const connection = await pool.getConnection();
        console.log('✅ Conexión a la base de datos exitosa');
        connection.release();
    } catch (error) {
        console.error('❌ Error al conectar con la base de datos:', error.message);
    }
}

testeo()