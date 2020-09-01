import express, { Request, Response } from "express";
import { getIllinoisCovidData } from "../delegators/covid/illinois";
import {
  processIllinoisCountyCovidData,
  processIllinoisCovidData,
} from "../processors/covid/illinois";

const covidRouter = express.Router();

covidRouter.get(
  "/country/:country/state/:state",
  (req: Request, res: Response) => {
    const country = req.params.country.toLowerCase();
    const state = req.params.state.toLowerCase();

    if (country === "usa" && state === "il") {
      getIllinoisCovidData()
        .then((data) => {
          const historicalRecord = processIllinoisCovidData(data);
          res.send(historicalRecord);
        })
        .catch((error) => {
          console.log(
            `error while retrieving illinois covid data: ${error.message}`
          );
          res.status(500);
          res.send();
        });
    } else {
      res.status(404);
      res.send();
    }
  }
);

covidRouter.get(
  "/country/:country/state/:state/county/:county",
  (req: Request, res: Response) => {
    const country = req.params.country.toLowerCase();
    const state = req.params.state.toLowerCase();
    const county = req.params.county.toLowerCase();

    if (country === "usa" && state === "il" && county === "mclean") {
      getIllinoisCovidData()
        .then((data) => {
          const historicalRecords = processIllinoisCountyCovidData(
            data,
            county
          );
          res.send(historicalRecords);
        })
        .catch((error) => {
          console.log(
            `error while retrieving illinois county ${county} covid data: ${error.message}`
          );
          res.status(500);
          res.send();
        });
    } else {
      res.status(404);
      res.send();
    }
  }
);

export { covidRouter };
