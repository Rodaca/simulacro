import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    valor: {
        type: Number,
        require: true,
        trim: true
    },
    descuento_porcentaje: {
        type: Number,
        require: true,
        trim: true
    },
    cantidad: {
        type: Number,
        require: true,
        trim: true
    },
    marca: {
        type: String,
        trim: true
    },
    categorias: {
        type: Array,
        trim: true
    },
    linea: {
        type: String,
        trim: true
    },
    foto: {
        type: String,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    }
}
);

const Producto = mongoose.model("productos", productoSchema);

export default Producto;