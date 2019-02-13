import express from "express";
export const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.send("user index"); // 화면에 출력.

userRouter.get("/edit", (req, res) => {
    res.send("user edit");
})

userRouter.get("/password", (req, res) => {
    res.send("user password"); 
})