import routes from "./routes";
import multer from "multer";

const multerVideo = multer({dest: "upload/videos/"});

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Youtube_Clone"; // 모든 페이지의 제목을 이걸로 사용하기 위함.
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    };
    next();
}

export const uploadVideo = multerVideo.single("videoFile"); // single은 업로드 파일 갯수가 하나여서..여러개면 뮬터 홈피가서 찾아볼것.