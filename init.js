import "./db";
import app from "./app"; // app.js 불러옴
import dotenv from "dotenv";
import "./models/Video";

dotenv.config();

//const PORT = 4000;

const PORT = process.env.PORT || 4000;

const handleListening = () => {
    console.log('Listening on: http://localhost:${PORT}');
}

app.listen(PORT, handleListening);