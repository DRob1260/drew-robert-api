import express, { Request, Response } from "express";
import { getIllinoisCovidData } from "../delegators/covid/illinois";
import { processIllinoisCovidData } from "../processors/covid/illinois";

const covidRouter = express.Router();

covidRouter.get(
  "/country/:country/state/:state/county/:county",
  (req: Request, res: Response) => {
    const country = req.params.country.toLowerCase();
    const state = req.params.state.toLowerCase();
    const county = req.params.county.toLowerCase();

    if (country === "usa" && state === "il" && county === "mclean") {
      getIllinoisCovidData().then((data) => {
        const historicalCountyRecords = processIllinoisCovidData(data, county);
        res.send(historicalCountyRecords);
      });
    } else {
      res.status(404);
      res.send();
    }
  }
);

export { covidRouter };
