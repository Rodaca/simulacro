import Producto from "../models/productos.js";

const getall = async (req, res)=>{
    try {
        const dato = await Producto.find();
        res.json(dato);
    } catch (error) {
        console.log(error);
    }
};

const post = async (req, res)=>{
    const dato = new Producto(req.body);
    try {
        const nuevoDato = await dato.save();
        res.json(nuevoDato);
    } catch (error) {
        console.log(error);
    }
};

const del = async (req, res)=>{
    try {
        await Producto.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Producto no existe"});
    }
};

const getone = async (req, res)=>{
    try {
        const dato = await Producto.findOne({_id:req.params.id});
        res.send(dato);
    } catch (error) {
        res.status(404);
        res.send({error: "Producto no existe"});
    }
}

const put = async (req, res)=>{
    try {
        const dato = await Producto.findOne({_id:req.params.id});
        if (req.body.nombre) {
            dato.nombre = req.body.nombre;
        }
        if (req.body.valor) {
            dato.valor = req.body.valor;
        }
        if (req.body.descuento_porcentaje) {
            dato.descuento_porcentaje = req.body.descuento_porcentaje;
        }
        if (req.body.cantidad) {
            dato.cantidad = req.body.cantidad;
        }
        if (req.body.marca) {
            dato.marca = req.body.marca;
        }
        if (req.body.categorias) {
            dato.categorias = req.body.categorias;
        }
        if (req.body.linea) {
            dato.linea = req.body.linea;
        }
        if (req.body.nombre) {
            dato.nombre = req.body.nombre;
        }
        if (req.body.nombre) {
            dato.nombre = req.body.nombre;
        }
        
        
        await dato.save();
        res.send(dato);
    } catch (error) {
        res.status(404);
        res.send({error: "Producto no existe"});
    }
};


export {getall, post, del, getone, put};