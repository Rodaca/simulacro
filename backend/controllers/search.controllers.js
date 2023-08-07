import { response } from'express';
import { Types } from 'mongoose';
const { ObjectId } = Types;

import Producto from "../models/productos.js";
import Categoria from "../models/categorias.js";


const allowedCollections = [
    
    'categorias',
    'productos'
]



const searchCategorias = async( criterio = '', res = response ) => {

    const isMongoID = ObjectId.isValid( criterio ); 

    if ( isMongoID ) {
        const categoria = await Categoria.findById(criterio);
        return res.json({
            results: ( categoria ) ? [ categoria ] : []
        });
    }

    const regex = new RegExp( criterio, 'i' );
    const categorias = await Categoria.find({ tipo: regex});

    res.json({
        results: categorias
    });

}

const searchProductos = async( criterio = '', res = response ) => {

    const isMongoID = ObjectId.isValid( criterio ); 

    if ( isMongoID ) {
        const producto = await Producto.findById(criterio);
        return res.json({
            results: ( producto ) ? [ producto ] : []
        });
    }

    const regex = new RegExp( criterio, 'i' );
    const productos = await Producto.find({
        $or:[{nombre: regex},{marca: regex},{codigo: regex},{codigo: regex}/*,{cantidad: regex}*/] 
        });

    res.json({
        results: productos
    });

}



const search = ( req, res = response ) => {
    
    const { coleccion, criterio  } = req.params;

    if (!allowedCollections.includes(coleccion)){
        return res.status(400).json({
            msg: `El buscador solo permite las colecciones: ${allowedCollections}`
        })
    }

    switch (coleccion) {

        case 'categorias':
            searchCategorias(criterio, res);
        break;
        case 'productos':
            searchProductos(criterio, res);
        break;
        
        default:
            res.status(500).json({
                msg: 'This search doesnt exists'
            })
    }

  

}



export { search };
