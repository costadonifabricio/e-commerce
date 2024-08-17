import { PORT } from "../config/config.js";
import express from 'express'
import cors from 'cors'
import morgan from 'morgan';
import routerUser from "../routes/user.routes.js";
import routerProduct from "../routes/products.routes.js";
import { dbConnection } from "../db/connection.js";

export class Server {

    constructor(){
        this.app = express();
        this.port = PORT;
        this.dbConnect();
        this.middlewares();   
        this.routes(); 
    }

    async dbConnect(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/api', routerUser)
        this.app.use('/api', routerProduct)
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server on http://127.0.0.1:${this.port}`)
        })
    }
}