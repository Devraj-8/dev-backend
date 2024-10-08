import express, { json } from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true,
}))

app.use(json({limit:"16kb"}))


export {app}