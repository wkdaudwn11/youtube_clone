//import {Videos} from "../db";
import routes from '../routes';
import Video from "../models/Video";

//export const home = (req, res) => res.render("home", {pageTitle: "Home", Videos})
//export const home = async (req, res, next) => {
    // 바로 위의 주석처럼 일반적으로 써도 되지만..
    // try await catch는 좀 더 속도가 빠르고 실시간 대응이 가능함 (비동기방식)
    // 대용량 데이터에 적합하지만 그냥 데이터가 작아도 이거 써도 될듯함.
//     try {
//         const videos = await Video.find({});
//         res.render( "home", { pageTitle: "Home", videos });

//     } catch (error) {
//         console.log(error);
//         res.render("home", { pageTitle: "Home", videos: [] });
//     }
// };

// export const search = (req, res) => {
//     const {
//         query: { term: searchingBy}
//     } = req;
//     res.render("search", {pageTitle: "Search", searchingBy, videos});
// }

export const home = async (req, res) => {
    try {
        const videos = await Video.find({});
        res.render("home", { pageTitle: "Home", videos });
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });
    }
};


export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const videos = (req,res) => res.render("videos", {pageTitle: "videos"});

//export const upload = (req,res) => res.render("upload", {pageTitle: "upload"});
export const getUpload = (req,res) => {
    res.render("upload", {pageTitle: "Upload"});
}

export const postUpload = async (req,res) => {
    const {
        body: {title, description},
        file: {path}
    } = req;

    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });

    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
}

export const videoDetail = (req,res) => res.render("videoDetail", {pageTitle: "videoDetail"});
export const editVideo = (req,res) => res.render("editVideo", {pageTitle: "editVideo"});
export const deleteVideo = (req,res) => res.render("deleteVideo", {pageTitle: "deleteVideo"});