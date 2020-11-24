import express from "express";
import { covidRouter } from "./covid/covidRouter";

const indexRouter = express.Router();

indexRouter.use("/covid", covidRouter);

export { indexRouter };
