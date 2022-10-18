import { Router } from "express";
import { PostListe } from "../Controllers/IndexController";

const routes = Router();
routes.route('/liste').get(PostListe)

export default routes;