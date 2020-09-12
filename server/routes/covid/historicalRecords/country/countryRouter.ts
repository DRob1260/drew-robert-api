import express, { Request, Response } from "express";
import { countryResolver } from "./countryResolver";
import { processCountryData } from "../../../../processors/covid/historicalRecords/country/countryProcessor";
import { territoryRouter } from "./territory/territoryRouter";

const countryRouter = express.Router();

const territoryPath = "territory";

// GET /covid/historicalRecords/country/
countryRouter.get("/", (req: Request, res: Response) => {
  const countryList = countryResolver.map((c) => {
    return c.key;
  });
  res.status(200);
  res.send({
    countries: countryList,
    territory: `/${territoryPath}`,
  });
});

// GET /covid/historicalRecords/country/:country
countryRouter.get(`/:country`, (req: Request, res: Response) => {
  const { country } = req.params;
  if (countryResolver.find((c) => c.key === country.toLocaleLowerCase())) {
    try {
      // TODO: retrieve data for country and pass into processor
      const historicalRecords = processCountryData(country, []);
      res.status(200);
      res.send(historicalRecords);
    } catch (error) {
      res.status(500);
      res.send();
    }
  } else {
    res.status(404);
    res.send();
  }
});

countryRouter.use("/:country/territory/", territoryRouter);

export { countryRouter };
