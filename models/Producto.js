const mongoose = require("mongoose");

//Modelo de la BD
const productoSchema = mongoose.Schema({
    nombres: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    categoria: {
        type: String,
        required: true
    }
    
}, {versionkey: false});

module.exports = mongoose.model("Producto", productoSchema);


