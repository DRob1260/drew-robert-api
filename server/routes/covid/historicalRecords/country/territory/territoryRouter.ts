import express, { Request, Response } from "express";
import axios from "axios";
import { countryResolver } from "../countryResolver";
import { territoryResolver } from "./territoryResolver";

const territoryRouter = express.Router({ mergeParams: true });

const regionPath = "region";

// GET /covid/historicalRecords/country/:country/territory
territoryRouter.get("/", (req: Request, res: Response) => {
  console.log(req.params);
  const countryParam = req.params.country;
  const territoryList = countryResolver.find((c) => {
    return c.key === countryParam.toLowerCase();
  }).territories;
  res.status(200);
  res.send({
    territories: territoryList,
    region: `/${regionPath}`,
  });
});

// GET /covid/historicalRecords/country/:country/territory/:territory
territoryRouter.get("/:territory", (req: Request, res: Response) => {
  const countryParam = req.params.country;
  const territoryParam = req.params.territory;
  const territory = territoryResolver.find((t) => {
    return (
      t.country === countryParam.toLowerCase() &&
      t.territory === territoryParam.toLocaleLowerCase()
    );
  });
  if (territory) {
    axios
      .get(territory.api.historicalRecords.url)
      .then((response) => {
        const historicalRecords = territory.api.historicalRecords.processor(
          response.data
        );
        res.status(200);
        res.send(historicalRecords);
      })
      .catch(() => {
        res.status(500);
        res.send();
      });
  } else {
    res.status(404);
    res.statusMessage = "Territory not found.";
    res.send();
  }
});

export { territoryRouter };
