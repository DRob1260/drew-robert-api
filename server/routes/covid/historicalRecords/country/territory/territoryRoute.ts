import express, { Request, Response } from "express";
import { countries } from "../countries";

const territoryRouter = express.Router();

const regionPath = "region";

// GET /covid/historicalRecords/country/:country/territory
territoryRouter.get(
  "/", (req: Request, res: Response) => {
    const { country } = req.params;
    const territoryList = countries.find(c => {
      return c.key === country.toLowerCase();
    }).territories;
    res.status(200);
    res.send({
      territories: territoryList,
      region: `${req.url}/${regionPath}`
    });
  }
);

territoryRouter.get(
  "/:territory", (req: Request, res: Response) => {
   const { country, territory } = req.params;
    const territoryList = countries.find(c => {
      return c.key === country.toLowerCase();
    }).territories;
    if(territoryList.find(t => t.key === territory.toLocaleLowerCase())) {
      try {

      }
      res.status(200);
      res.send()
    }
  }
)
