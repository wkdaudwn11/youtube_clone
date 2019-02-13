// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,

    usersHome: HOME,
    users: USERS,
    userDetal: USER_DETAIL,
    userProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,

    videosHome: HOME,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: VIDEO_DETAIL,
    editVideo: EDIT_VIDEO,
    deleteVideo: DELETE_VIDEO
}

export default routes;