import express from 'express';
import cors from 'cors';
import route from './route/route.js';
import { uploadImage } from './controller/image-controller.js';
import connection from './database/db.js';


const app = express();
const port=8000;

app.use(cors());
app.use('/',route);
connection();
app.listen(port, () => console.log(`running the server on port ${port}`));

