import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(
    //"mongodb+srv://wkdaudwn11:1q2w3e4r@cluster0-k8fxr.mongodb.net/test?retryWrites=true",
    process.env.MONGO_URL,
    {
        useNewUrlParser:true,
        useFindAndModify:false // 없어도 됨
    }
);

const db = mongoose.connection;

const handleopen = () => console.log("Conneted to DB");
const handleerror = error => console.log(`Error on DB connetion:${error}`);

db.once('open',handleopen);
db.on('error',handleerror);