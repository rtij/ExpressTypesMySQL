export class Utilisateur{
    username:string;
    password:string;
    isonline:boolean = false;
    idutilisateur?:number;
    constructor(username:string, password:string){
        this.username = username;
        this.password = password;
    }
}