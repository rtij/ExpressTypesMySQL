import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import bcrypt from 'bcrypt';

@Entity('utilisateur')
export class Utilisateur extends BaseEntity{
    
	@PrimaryGeneratedColumn()
    idutilisateur?:number;


    @Column({
        unique:true,
        nullable:false
    })
    username:string;

    @Column({
        select:false,
        unique:true,
        nullable:false
    })
    password:string;

    @Column()
    isonline:boolean;

    async EncryptPassword(plainpassword:string):Promise<Error | string>{
        let encoded =  bcrypt.hash(plainpassword, 10);
        return encoded;
    }

    async IsPasswordValid(plainpassword:string):Promise<Error | boolean>{
        return await bcrypt.compare(plainpassword, this.password);
    }

}
export default Utilisateur;