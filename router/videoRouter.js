import express from 'express';
import routes from '../routes';
import {getUpload, postUpload, videoDetail, editVideo, deleteVideo} from '../controllers/videoController';
import {uploadVideo} from "../middlewares";

const videoRouter = express.Router();

//videoRouter.get(routes.home, (req,res) => res.send("VideosHome"));
//videoRouter.get(routes.videos, videos);

//videoRouter.get(routes.upload, upload);
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;