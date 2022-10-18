import { Request, Response } from 'express';
import { Post } from '../entity/Post';
import Utilisateur from '../entity/Utilisateur';
export function SayHello(req: Request, res: Response) {
    return res.status(200).json(["data", "Hello"]);
}
export async function UserListe(req: Request, res: Response) {
    const users = await Utilisateur.find();
    return res.status(200).json({ "data": users });
}
export async function PostListe(req: Request, res: Response) {
    const posts = await Post.find();
    return res.status(200).json({ "data": posts });
}