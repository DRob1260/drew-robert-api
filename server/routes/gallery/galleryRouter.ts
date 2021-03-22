import express, { Request, Response } from "express";
import { flickrRouter } from "./flickr/flickrRouter";

export const galleryRouter = express.Router();

const flickrPath = "/flickr";

galleryRouter.use(flickrPath, flickrRouter);

galleryRouter.get("/", (req: Request, res: Response) => {
  res.status(200);
  res.send({
    flickr: flickrPath,
  });
});
