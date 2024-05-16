const express = require ("express");
const conectarBD = require ("../config/db");
const cors = require ("cors");

// Configuración express y puerto
const app = express();
//const port = 5000;
const port = proccess.env.PORT || 7000;

//Enlazamos la conexion de la base de datos
conectarBD();
app.use(cors());
app.use(express.json());
app.use("/api/clientes", require("../routes/RoutesCliente"));
app.use("/api/productos", require("../routes/RoutesProducto"));


app.listen(port, () => console.log("Nuestro servidor se encuentra conectado http://localhost:7000", port));

app.get("/", (req, res) =>{
    res.send("Bienvenido, nuestro servidor está configurado");
});



