import express from "express";
import { historicalRecordsRouter } from "./historicalRecords/historicalRecordsRouter";

const covidRouter = express.Router();

covidRouter.use("/historicalRecords", historicalRecordsRouter);

export { covidRouter };
