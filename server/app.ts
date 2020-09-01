import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { indexRouter } from "./routes";
import { covidRouter } from "./routes/covid";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/", indexRouter);
app.use("/covid", covidRouter);

export default app;
