import express from 'express';
import { SERVER_PORT } from '../global/enviroment';
import cors from 'cors';
export default class Server{
    public app:express.Application;
    public port:number;

    constructor(){
        this.app = express();
        this.port = SERVER_PORT;
    }

    start(callback:Function){
        this.app.use( cors() )
        this.app.use(express.json())
        this.app.listen(this.port, callback())
    }

}