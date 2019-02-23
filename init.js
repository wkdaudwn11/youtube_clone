import "./db";
import app from "./app"; // app.js 불러옴

const PORT = 4000;

const handleListening = () => {
    console.log('Listening on: http://localhost:${PORT}');
}

app.listen(PORT, handleListening);