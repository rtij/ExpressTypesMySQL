import { Router } from "express";
import { UserListe } from "../Controllers/IndexController";


const routes = Router();
routes.route('/liste').get(UserListe)

export default routes;