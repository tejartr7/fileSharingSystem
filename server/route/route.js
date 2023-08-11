import express from 'express';
import {uploadImage,getImage} from '../controller/image-controller.js';
import upload from '../utils/upload.js';

const route = express.Router();
route.post('/upload',upload.single('file'),uploadImage);
route.get('/file/:fileId',getImage);

export default route;