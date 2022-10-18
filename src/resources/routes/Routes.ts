import { Router } from "express";
import { PostListe, UserListe } from "../Controllers/IndexController";

const Routes = Router();
Routes.route('/utilisateur/liste').get(UserListe)
Routes.route('/post/liste').get(PostListe)
export default Routes;