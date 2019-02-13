import express from 'express';
import routes from '../routes';
import {users, usersDetail, editProfile, changePassword} from '../controllers/userController';

const userRouter = express.Router();

//userRouter.get(routes.home, (req,res) => res.send("usersHome"));
userRouter.get(routes.users, users);
userRouter.get(routes.userDetal, usersDetail);
userRouter.get(routes.userProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

//userRouter.get(routes.userDetal, (req,res) => res.send("userDetal"));
//userRouter.get(routes.userProfile, (req,res) => res.send("userProfile"));
//userRouter.get(routes.changePassword, (req,res) => res.send("logout"));

export default userRouter;