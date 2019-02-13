const express = require('express'); //익스프레스 불러오기
const app = express(); //함수들의 모음을 app으로 지정
const PORT = 4000; // 숫자는 상관없음

function handleListening(){
    console.log('Listening on: http://localhost:${PORT}');
}

const betweenHome = (req, res, next) => {
    console.log("Between");
    next();
}

const handleHome = () => {
    console.log("handleHome");
}

const handleProfile = () => {
    console.log("handleProfile");
}

//app.use(betweenHome);

app.get("/", betweenHome, handleHome);
app.get("/profile", handleProfile);
app.listen(PORT, handleListening);