
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import userRouter from './router/userRouter';
import globalRouter from './router/globalRouter';
import videoRouter from './router/videoRouter';
import routes from './routes'; 

const app = express();

app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// 헬멧이랑 모간은 검색해볼것
app.use(helmet()); 
app.use(morgan("dev"));

app.use(routes.home, globalRouter); // routes의 home변수가 호출되면 globalRouter를 호출
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;