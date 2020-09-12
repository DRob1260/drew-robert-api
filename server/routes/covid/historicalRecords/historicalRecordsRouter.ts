import express, { Request, Response } from "express";
import { countryRouter } from "./country/countryRouter";

const historicalRecordsRouter = express.Router();

// GET /covid/historicalRecords/
// TODO: return global historicalRecords
historicalRecordsRouter.get("/", (req: Request, res: Response) => {
  res.status(200);
  res.send({
    country: `${req.url}/country`,
  });
});

historicalRecordsRouter.use("/country", countryRouter);

export { historicalRecordsRouter };
