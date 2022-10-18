import { Router } from "express";
import Utilisateur from './Utilisateur';
import Post from './Post';

const Routes = Router();
Routes.use('/utilisateur', Utilisateur);
Routes.use('/post', Post)
export default Routes;