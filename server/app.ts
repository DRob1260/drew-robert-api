import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { indexRouter } from "./routes";

const app = express();

app.use(logger(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use(`/`, indexRouter);

export default app;
