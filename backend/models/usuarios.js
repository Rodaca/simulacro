import mongoose from "mongoose";

const usuariosSchema = mongoose.Schema({
    user: {
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    rol: {
        type: String,
        trim: true
    }
}
);

const Usuarios = mongoose.model("usuarios", usuariosSchema);

export default Usuarios;