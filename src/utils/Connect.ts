import mysql from 'mysql';

function connect(url:string, callback: (error?:string) => void ){
    mysql.createConnection(url).connect((err)=>{
        if(err){
            callback(err.message);
        }else{
            callback();
        }
    });
}
export default connect;