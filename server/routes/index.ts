import express from "express";
import { covidRouter } from "./covid/covidRouter";
import { websiteRouter } from "./websiteRouter/websiteRouter";

const indexRouter = express.Router();

console.log("indexRouter");

indexRouter.use(express.static(path.resolve));

indexRouter.use("/", websiteRouter);

indexRouter.use("/covid", covidRouter);

export { indexRouter };
