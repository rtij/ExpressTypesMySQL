import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Utilisateur from "./Utilisateur";


@Entity('post')
export class Post extends BaseEntity{
    @PrimaryGeneratedColumn()
    idpost:number;

    @Column({
        name:"content",
        type:"text",
        nullable:false
    })
    content:string

    @ManyToOne(() => Utilisateur,{ eager: true })
	@JoinColumn({
		name: 'idutilisateur',
	})
	idutilisateur: Utilisateur;
}