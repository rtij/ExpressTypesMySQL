import { DataSource } from "typeorm"
function connect(type: "mysql" | "postgres", host: string, port: number, username: string, password: string, database: string, entity: [], callback: (error?: string) => void) {
    const AppDataSource = new DataSource({
        type: type,
        host: host,
        port: port,
        username: username,
        password: password,
        database: database,
        logging: false,
        entities: entity,
        migrations: [],
        subscribers: []
    });
    AppDataSource.initialize().then(()=>{}).catch((error) => callback(error));
}
export default connect;


// import mysql from 'mysql';

// function connect(url:string, callback: (error?:string) => void ){
//     mysql.createConnection(url).connect((err)=>{
//         if(err){
//             callback(err.message);
//         }else{
//             callback();
//         }
//     });
// }
// export default connect;
