import express, { Request, Response } from "express";
import { territoryRouter } from "./territory/territoryRouter";
import {
  findCountry,
  getCountries,
} from "../../../../utilities/covid/LocationResolver";

const countryRouter = express.Router();

const territoryPath = "/territory";

// GET /covid/historicalRecords/country/
countryRouter.get("/", (req: Request, res: Response) => {
  const countries = getCountries();
  res.status(200);
  res.send({
    countries: countries,
    territory: territoryPath,
  });
});

// GET /covid/historicalRecords/country/:country
countryRouter.get(`/:country`, (req: Request, res: Response) => {
  const countryParam = req.params.country;
  const resolvedCountry = findCountry(countryParam);
  if (resolvedCountry) {
    try {
      // TODO: retrieve data for country and pass into processor
      const locationHistoricalRecords = resolvedCountry.processor(
        [],
        resolvedCountry
      );
      res.status(200);
      res.send(locationHistoricalRecords);
    } catch (error) {
      res.status(500);
      res.send();
    }
  } else {
    res.status(404);
    res.statusMessage = `Country "${countryParam}" not found.`;
    res.send();
  }
});

countryRouter.use(`/:country${territoryPath}`, territoryRouter);

export { countryRouter };
