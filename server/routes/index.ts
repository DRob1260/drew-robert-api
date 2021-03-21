import express, { Request, Response } from "express";
import { covidRouter } from "./covid/covidRouter";
import { galleryRouter } from "./gallery/galleryRouter";
import { machERouter } from "./machE/machERouter";

const indexRouter = express.Router();

const covidPath = "/covid";
const galleryPath = "/gallery";
const mmePath = "/mme";

indexRouter.use(covidPath, covidRouter);

indexRouter.use(galleryPath, galleryRouter);

indexRouter.use(mmePath, machERouter);

indexRouter.get("/", (req: Request, res: Response) => {
  res.status(200);
  res.send({
    covid: covidPath,
    gallery: galleryPath,
  });
});

export { indexRouter };
