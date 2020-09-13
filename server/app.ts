import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { indexRouter } from "./routes";
import { covidRouter } from "./routes/covid";
import { Urls } from "./config";

const app = express();

app.use(logger(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use(`${Urls.rootPath}/`, indexRouter);

export default app;
