import Categoria from "../models/categorias.js";

const getall = async (req, res)=>{
    try {
        const dato = await Categoria.find();
        res.json(dato);
    } catch (error) {
        console.log(error);
    }
};

const post = async (req, res)=>{
    const dato = new Categoria(req.body);
    try {
        const nuevoDato = await dato.save();
        res.json(nuevoDato);
    } catch (error) {
        console.log(error);
    }
};

const del = async (req, res)=>{
    try {
        await Categoria.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Categoria no existe"});
    }
};

const getone = async (req, res)=>{
    try {
        const dato = await Categoria.findOne({_id:req.params.id});
        res.send(dato);
    } catch (error) {
        res.status(404);
        res.send({error: "Categoria no existe"});
    }
}

const put = async (req, res)=>{
    try {
        const dato = await Categoria.findOne({_id:req.params.id});
        if (req.body.nombre) {
            dato.nombre = req.body.nombre;
        }
        await dato.save();
        res.send(dato);
    } catch (error) {
        res.status(404);
        res.send({error: "Categoria no existe"});
    }
};


export {getall, post, del, getone, put};