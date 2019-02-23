import express from 'express';
import routes from '../routes';
//import {join, login, logout} from '../controllers/userController';
import {getJoin, postJoin, getLogin, postLogin, logout} from '../controllers/userController';
import {search, home} from '../controllers/globalController';

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

//globalRouter.get(routes.join, join);
globalRouter.get(routes.join, getJoin); // get, post로 나눔 (get은 JOIN 화면)
globalRouter.post(routes.join, postJoin); // POST는 JOIN_OK 화면

//globalRouter.get(routes.login, login);
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;