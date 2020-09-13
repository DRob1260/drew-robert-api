import express, { Request, Response } from "express";
import { historicalRecordsRouter } from "./historicalRecords/historicalRecordsRouter";

const covidRouter = express.Router();

const historicalRecordsPath = "/historicalRecords";

// GET /covid
covidRouter.get("/", (req: Request, res: Response) => {
  res.status(200);
  res.send({
    historicalRecords: historicalRecordsPath,
  });
});

covidRouter.use(historicalRecordsPath, historicalRecordsRouter);

export { covidRouter };
