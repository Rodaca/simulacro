import Usuario from "../models/usuarios.js";

const getall = async (req, res)=>{
    try {
        const dato = await Usuario.find();
        res.json(dato);
    } catch (error) {
        console.log(error);
    }
};

const post = async (req, res)=>{
    const dato = new Usuario(req.body);
    try {
        const nuevoDato = await dato.save();
        res.json(nuevoDato);
    } catch (error) {
        console.log(error);
    }
};

const del = async (req, res)=>{
    try {
        await Usuario.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Usuario no existe"});
    }
};

const getone = async (req, res)=>{
    try {
        const dato = await Usuario.findOne({_id:req.params.id});
        res.send(dato);
    } catch (error) {
        res.status(404);
        res.send({error: "Usuario no existe"});
    }
}

const put = async (req, res)=>{
    try {
        const dato = await Usuario.findOne({_id:req.params.id});
        if (req.body.user) {
            dato.user = req.body.user;
        }
        if (req.body.password) {
            dato.password = req.body.password;
        }
        if (req.body.email) {
            dato.email = req.body.email;
        }
        if (req.body.rol) {
            dato.rol = req.body.rol;
        }
        await dato.save();
        res.send(dato);
    } catch (error) {
        res.status(404);
        res.send({error: "Usuario no existe"});
    }
};


export {getall, post, del, getone, put};