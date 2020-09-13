import express, { Request, Response } from "express";
import { countryRouter } from "./country/countryRouter";

const historicalRecordsRouter = express.Router();

const countryPath = "/country";

// GET /covid/historicalRecords
// TODO: return global historicalRecords
historicalRecordsRouter.get("/", (req: Request, res: Response) => {
  res.status(200);
  res.send({
    country: countryPath,
  });
});

historicalRecordsRouter.use(countryPath, countryRouter);

export { historicalRecordsRouter };
