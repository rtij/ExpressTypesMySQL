import express, { Application } from 'express';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import ErrorMiddleware from '@/middleware/error.middleware';
import connect from '@/utils/Connect';
import Routes from './resources/routes/Routes';
import { Utilisateur } from './resources/entity/Utilisateur';
import { Post } from './resources/entity/Post';


class App {
    public express: Application;
    public port: number;

    constructor( port: number) {
        this.express = express();
        this.port = port;
        this.initialisteDbConnection();
        this.initialiseMiddleware();
        this.initialiseErrorHandling();
        this.initialiseRoutes();
    }
    
    private initialisteDbConnection(){
        let database:any = process.env.DATABASE_TYPE;
        let entity:any = [Utilisateur, Post]
        connect(database || "mysql", process.env.DATABASE_HOST || 'localhost',Number( process.env.DATABASE_PORT), process.env.DATABASE_USERNAME || 'root', process.env.DATABASE_PASSWORD || '', process.env.DATABASE_NAME || '',entity ,  (error)=>{
            if(error){
                console.log(error);
                return false;
            }else{
                console.log("Connection success");
                return true;
            }
        });
    }

    private initialiseMiddleware(): void {
        this.express.use(helmet());
        this.express.use(cors());
        this.express.use(morgan('dev'));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
        this.express.use(compression());
    }
    
    private initialiseRoutes(){
        this.express.use('/api', Routes);
    }

    private initialiseErrorHandling(): void {
        this.express.use(ErrorMiddleware)
    }
    
    public listen(): void {
        this.express.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}

export default App;
