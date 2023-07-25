import express from "express";
import cors from "cors";

import productoRoutes from '../routes/producto.routes.js';
import categoriaRoutes from '../routes/categoria.routes.js';

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.productoPath = '/api/producto';
        this.categoriaPath = '/api/categoria';

        
        this.middlewars();
        this.routes();
    }


    middlewars(){
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.productoPath, productoRoutes);
        this.app.use(this.categoriaPath, categoriaRoutes);

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`SERVER RUNNING ON PORT ${this.port}`);
        });
    }
}

export default Server;