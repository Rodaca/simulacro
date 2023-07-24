import mongoose from "mongoose";

const categoriaSchema = mongoose.Schema({
    tipo: {
        type: String,
        require: true,
        trim: true
    }
}
);

const Categoria = mongoose.model("categorias", categoriaSchema);

export default Categoria;