import express from "express";
import { covidRouter } from "./covid/covidRouter";

const indexRouter = express.Router();

indexRouter.get("/", function (req, res) {
  res.send({
    covid: "/covid",
  });
});

indexRouter.use("/covid", covidRouter);

export { indexRouter };
