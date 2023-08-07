import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    foto: {
        type: String,
        trim: true,
        default:"..."
    },
    marca: {
        type: String,
        require: true,
        trim: true
    },
    codigo: {
        type: String,
        require: true,
        trim: true
    },
    precio_compra: {
        type: Number,
        require: true,
        trim: true
    },
    precio_venta: {
        type: Number,
        require: true,
        trim: true
    },
    categorias: {
        type: Array,
        trim: true
    },
    descripcion: {
        type: String,
        trim: true
    },
    cantidad: {
        type: Number,
        default:0,
        trim: true
    }
}
);

const Producto = mongoose.model("productos", productoSchema);

export default Producto;