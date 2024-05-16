const mongoose = require("mongoose");
require("dotenv").config();


//Función para hacer la conexión

const conectarDB = () => {
    mongoose
    .connect(process.env.MONGO_URL)
    .then (() => console.log("Estamos conectados con mongoDB"))
    .catch ((err) => console.error(err));
}

module.exports = conectarDB;

