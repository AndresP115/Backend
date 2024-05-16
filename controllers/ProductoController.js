
//Se exporta el modelo
const Producto = require ("../models/Producto");

//Agregar productos
exports.agregarProducto = async(req, res)=> {
    try {
        let productos = new Producto(req.body)
        await productos.save();
        res.send(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al agregar un producto");
    }
}

//Mostrar productos
exports.mostrarProducto = async (req, res) => {
    try {
        let productos = await Producto.find();
        res.send(productos);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al mostrar el producto");
    }
}

//Mostrar un producto
exports.mostrarUnProducto = async (req, res) => {
    try {
        let productos = await Producto.findById(req.params.id);

        if(!productos){
            res.status(404).send({msg: "No se encuentra el producto con ese ID"})
        }

        res.json(productos)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al mostrar el producto");
    }
}

//Eliminar un producto
exports.eliminarProductos = async (req, res) => {
    try {
        let productos = await Producto.findById(req.params.id);

        if(!productos){
            res.status(404).send({msg: "El producto no existe"});
            return
        }

        await Producto.findOneAndDelete ({_id: req.params.id});
        res.json({msg: "El producto fue eliminado con exito"})

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al eliminar un producto");
    }
}

//Modificar un producto
exports.modificarProducto = async (req, res) => {
    try {
        let producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!producto){
            return res.status(404).json("Producto no encontrado");
        }
        res.send(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error al modificar el producto");        
    }
}


