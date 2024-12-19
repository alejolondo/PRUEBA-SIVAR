import express from "express";
import cors  from 'cors';
import { dbConnection }  from '../database/config.js'
import usuariosRoutes from '../routes/usuario.routes.js'
import authRoutes from '../routes/auth.routes.js'
import empresasRoutes from '../routes/empresa.routes.js'
import puntoVentaRoutes from '../routes/puntoVenta.routes.js'

export class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.authPath = '/api/auth';
        this.usuariosPath = '/api/usuarios';
        this.empresasPath = '/api/empresas';
        this.puntoVentaPath = '/api/punto-venta';

        this.conectarBaseDatos();

         
        this.middlewares();

         
        this.routes();
 
        this.listen();
        
    }

    async conectarBaseDatos(){
        await dbConnection()
    }


    middlewares() {

        //CORS
        this.app.use(cors());

        //Lectura y parseo de body
        this.app.use(express.json() );
        
        //Directorio publico 
        this.app.use(express.static('public'));


    }

    routes(){
        
        this.app.use( this.authPath, authRoutes );
        this.app.use( this.usuariosPath, usuariosRoutes );
        this.app.use( this.empresasPath, empresasRoutes );
        this.app.use( this.puntoVentaPath, puntoVentaRoutes);

    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log('Servidor corriendo en el puerto', this.port )
        })
    }
}






