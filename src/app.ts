import express, { Application } from 'express';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import ErrorMiddleware from '@/middleware/error.middleware';
import connect from '@/utils/Connect';
import mysql from 'mysql';


class App {
    public express: Application;
    public port: number;

    constructor( port: number) {
        this.express = express();
        this.port = port;
        this.initialisteDbConnection();
        this.initialiseMiddleware();
        this.initialiseErrorHandling();
    }
    
    private initialisteDbConnection(){
        connect(process.env.DATABASE_URL || '',(error)=>{
            if(error){
                console.log(error);
            }else{
                console.log("Connection success");
            }
        });
        // mysql.createConnection(process.env.DATABASE_URL || '').connect();
    }

    private initialiseMiddleware(): void {
        this.express.use(helmet());
        this.express.use(cors());
        this.express.use(morgan('dev'));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
        this.express.use(compression());
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
