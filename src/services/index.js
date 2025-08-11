import express from "express"


//Usamos express para poder crear las rutas
    const app= express();
//Esto es lo que permite que express lea la informacion que llega en formato json para luego crearlo en un objeto
    app.use(express.json())



//El siguiente bloque de codigo demuestra como se crea cada ruta para luego ser usada en el front
//GET
app.get("/prestamos", async (request, response) =>{
    try {
        const query =`SELECT `
    } catch (error) {
        res.status(500).json({
            status: 'error',
            endpoint: req.originalUrl,
            method: req.method,
            message: error.message
        });
    }
})
//POST
//PUT
//DELETE













app.listen(3000,()=>{
    console.log("the server has been activing, endPoint http://localhost/3000")
})