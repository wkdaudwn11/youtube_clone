import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Youtube_Clone"; // 모든 페이지의 제목을 이걸로 사용하기 위함.
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    };
    next();
}