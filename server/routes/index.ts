import express from "express";
import { covidRouter } from "./covid/covidRouter";
import { createProxyMiddleware } from "http-proxy-middleware";
import { Urls } from "../config";

const indexRouter = express.Router();

indexRouter.use("/covid-api", covidRouter);

indexRouter.use(
  "/redcycle-ui",
  createProxyMiddleware(Urls.redcycleUi, {
    protocolRewrite: "https",
    changeOrigin: true,
    target: Urls.redcycleUi,
  })
);

indexRouter.use(
  "/redcycle-api/*",
  createProxyMiddleware(Urls.redcycleApi, {
    protocolRewrite: "https",
    changeOrigin: true,
    target: Urls.redcycleApi,
  })
);

indexRouter.all(
  "/*",
  createProxyMiddleware(Urls.drewRobertSite, {
    protocolRewrite: "https",
    changeOrigin: true,
    target: Urls.drewRobertSite,
  })
);

export { indexRouter };
