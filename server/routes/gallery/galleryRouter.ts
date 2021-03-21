import express, { Request, Response } from "express";
import { flickrRouter } from "./flickr/flickrRouter";
import "regenerator-runtime/runtime.js";

export const galleryRouter = express.Router();

const flickrPath = "/flickr";

galleryRouter.use(flickrPath, flickrRouter);

galleryRouter.get("/", (req: Request, res: Response) => {
  res.status(200);
  res.send({
    flickr: flickrPath,
  });
});
