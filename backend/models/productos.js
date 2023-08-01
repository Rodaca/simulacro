import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    foto: {
        type: String,
        trim: true
    },
    marca: {
        type: String,
        trim: true
    },
    codigo: {
        type: String,
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
        require: true,
        trim: true
    }
}
);

const Producto = mongoose.model("productos", productoSchema);

export default Producto;