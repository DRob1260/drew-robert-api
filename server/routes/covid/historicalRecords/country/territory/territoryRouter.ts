import express, { Request, Response } from "express";
import axios from "axios";
import {
  findCountry,
  findTerritory,
  getTerritoriesInCountry,
} from "../../../../../utilities/covid/LocationResolver";
import { regionRouter } from "./region/regionRouter";

const territoryRouter = express.Router({ mergeParams: true });

const regionPath = "/region";

// GET /covid/historicalRecords/country/:country/territory
territoryRouter.get("/", (req: Request, res: Response) => {
  const countryParam = req.params.country;
  try {
    const country = findCountry(countryParam);
    if (country) {
      const territoryList = getTerritoriesInCountry(countryParam);
      res.status(200);
      res.send({
        territories: territoryList,
        region: regionPath,
      });
    } else {
      res.status(404);
      res.statusMessage = `Country ${countryParam} not found.`;
      res.send();
    }
  } catch {
    res.status(500);
    res.send();
  }
});

// GET /covid/historicalRecords/country/:country/territory/:territory
territoryRouter.get("/:territory", (req: Request, res: Response) => {
  const countryParam = req.params.country;
  const territoryParam = req.params.territory;
  try {
    const country = findCountry(countryParam);
    const territory = findTerritory(countryParam, territoryParam);
    if (country && territory) {
      axios.get(territory.source.apiUrl).then((response) => {
        const locationHistoricalRecords = territory.processor(
          response.data,
          territory
        );
        res.status(200);
        res.send(locationHistoricalRecords);
      });
    } else {
      const statusMessage = country
        ? `Territory "${territoryParam}" not found.`
        : `Country "${countryParam}" not found.`;
      res.status(404);
      res.statusMessage = statusMessage;
      res.send();
    }
  } catch {
    res.status(500);
    res.send();
  }
});

territoryRouter.use(`/:territory${regionPath}`, regionRouter);

export { territoryRouter };
