import express, { Request, Response } from "express";
import { covidRouter } from "./covid/covidRouter";

const indexRouter = express.Router();

indexRouter.use("/covid", covidRouter);

indexRouter.get("/", (req: Request, res: Response) => {
  res.status(200);
  res.send({
    covid: "/covid",
  });
});

export { indexRouter };
