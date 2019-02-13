import express from 'express';
import routes from '../routes';

const userRouter = express.Router();

userRouter.get(routes.home, (req,res) => res.send("usersHome"));
userRouter.get(routes.users, (req,res) => res.send("users"));
userRouter.get(routes.userDetal, (req,res) => res.send("userDetal"));
userRouter.get(routes.userProfile, (req,res) => res.send("userProfile"));
userRouter.get(routes.changePassword, (req,res) => res.send("logout"));

export default userRouter;