import express from 'express';
import cors from 'cors';
import route from './route/route.js';
import { uploadImage } from './controller/image-controller.js';
import connection from './database/db.js';


const app = express();
const port=https://file-sharing-system-backend-j81a.onrender.com;

app.use(cors());
app.use('/',route);
connection();
app.listen(port, () => console.log(`running the server on port ${port}`));

