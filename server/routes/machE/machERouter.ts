import express, { Request, Response } from "express";
import { getMmeForumOrders } from "../../processors/machE/mmeForumOrderProcessor";

export const machERouter = express.Router();

machERouter.get(
  "/mme-forum/order-submissions",
  (req: Request, res: Response) => {
    getMmeForumOrders()
      .then((mmeForumOrders) => {
        res.status(200);
        res.send(mmeForumOrders);
      })
      .catch((error) => {
        res.status(500);
        res.send(error.message);
      });
  }
);
