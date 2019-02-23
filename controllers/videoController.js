import {Videos} from "../db";
import routes from '../routes';

export const home = (req, res) => res.render("home", {pageTitle: "Home", Videos})

export const search = (req, res) => {
    const {
        query: { term: searchingBy}
    } = req;
    res.render("search", {pageTitle: "Search", searchingBy, videos});
}

export const videos = (req,res) => res.render("videos", {pageTitle: "videos"});

//export const upload = (req,res) => res.render("upload", {pageTitle: "upload"});
export const getUpload = (req,res) => {
    res.render("upload", {pageTitle: "Upload"});
}

export const postUpload = (req,res) => {
    const {
        body: {file, title, description}
    } = req;
    res.redirect(routes.videoDetail(324393)); // 324393은 video의 ID값
}

export const videoDetail = (req,res) => res.render("videoDetail", {pageTitle: "videoDetail"});
export const editVideo = (req,res) => res.render("editVideo", {pageTitle: "editVideo"});
export const deleteVideo = (req,res) => res.render("deleteVideo", {pageTitle: "deleteVideo"});