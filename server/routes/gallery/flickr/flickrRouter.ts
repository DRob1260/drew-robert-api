import express, { Request, Response } from "express";
import { retrieveUserPhotoUrls } from "../../../processors/gallery/galleryProcessor";

export const flickrRouter = express.Router();

flickrRouter.get("/users/:userId/photos", (req: Request, res: Response) => {
  const { userId } = req.params;
  retrieveUserPhotoUrls(userId)
    .then((photoDataList) => {
      res.status(200);
      res.send(photoDataList);
    })
    .catch((error) => {
      res.status(500);
      const errorDetail = error?.message || "Unknown.";
      res.send(`Request failed with error: ${errorDetail}`);
    });
});

flickrRouter.get("/", (req: Request, res: Response) => {
  res.status(200);
  res.send({
    userPhotos: "/users/:userId/photos",
  });
});
