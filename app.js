import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import {localsMiddleware} from "./middlewares"; // 미들웨어 임포트. 이건 pug에서 쓰임
import routes from './routes'; //라우츠 순서 이쪽으로

import userRouter from './router/userRouter';
import globalRouter from './router/globalRouter';
import videoRouter from './router/videoRouter';

const app = express();

app.use(helmet()); //헬멧도 맨위로.. 라우츠랑 헬멧 위치 바꾼 이유는 에러가 뜨길래. (안뜨면 안바꿔도 상관없음)
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads")); // 2019-02-23 뮬터 사용
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// 헬멧이랑 모간은 검색해볼것
app.use(morgan("dev"));

app.use(localsMiddleware);

app.use(routes.home, globalRouter); // routes의 home변수가 호출되면 globalRouter를 호출
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);



export default app;