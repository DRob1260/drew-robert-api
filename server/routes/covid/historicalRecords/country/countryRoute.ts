import express, { Request, Response } from "express";
import { countries } from "./countries";
import { processCountryData } from "../../../../processors/covid/historicalRecords/country/countryProcessor";

const countryRouter = express.Router();

const territoryPath = "territory";

// GET /covid/historicalRecords/country/
countryRouter.get("/", (req: Request, res: Response) => {
  const countryList = countries.map((c) => {
    return c.key;
  });
  res.status(200);
  res.send({
    countries: countryList,
    territory: `${req.url}/${territoryPath}`,
  });
});

// GET /covid/historicalRecords/country/:country
countryRouter.get(`/:country`, (req: Request, res: Response) => {
  const { country } = req.params;
  if (countries.find((c) => c.key === country.toLocaleLowerCase())) {
    res.status(200);
    // TODO: retrieve data for country and pass into processor
    const historicalRecords = processCountryData(country, []);
    res.send(historicalRecords);
  } else {
    res.status(404);
    res.send();
  }
});
