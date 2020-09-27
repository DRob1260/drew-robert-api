import express from "express";
import { covidRouter } from "./covid/covidRouter";
import { createProxyMiddleware } from "http-proxy-middleware";
import { Urls } from "../config";

const indexRouter = express.Router();

indexRouter.use("/covid-api", covidRouter);

indexRouter.all(
  "/*",
  createProxyMiddleware(Urls.drewRobertSite, {
    protocolRewrite: "https",
    changeOrigin: true,
  })
);

export { indexRouter };
