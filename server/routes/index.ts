import express, { Request, Response } from "express";
import { covidRouter } from "./covid/covidRouter";
import { galleryRouter } from "./gallery/galleryRouter";

const indexRouter = express.Router();

const covidPath = "/covid";
const galleryPath = "/gallery";

indexRouter.use(covidPath, covidRouter);

indexRouter.use(galleryPath, galleryRouter);

indexRouter.get("/", (req: Request, res: Response) => {
  res.status(200);
  res.send({
    covid: covidPath,
    gallery: galleryPath,
  });
});

export { indexRouter };
