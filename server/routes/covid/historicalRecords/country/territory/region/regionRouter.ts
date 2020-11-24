import express, { Request, Response } from "express";
import {
  findCountry,
  findTerritory,
} from "../../../../../../utilities/covid/LocationResolver";
import axios from "axios";
import { processRegionCovidData } from "../../../../../../processors/covid/historicalRecords/country/territory/region/illinoisRegionProcessor";
import { LocationClass } from "../../../../../../models/DrewRobertApi/covid/response/LocationClass";
import { buildKeyFromName } from "../../../../../../utilities/covid/LocationClassUtilities";
import { Record } from "../../../../../../models/covid/IllinoisDepartmentOfHealth/IllinoisCovidData";

const regionRouter = express.Router({ mergeParams: true });

// GET /covid/historicalRecords/country/:country/territory/:territory/region
regionRouter.get("/", (req: Request, res: Response) => {
  const countryParam = req.params.country;
  const territoryParam = req.params.territory;
  try {
    const country = findCountry(countryParam);
    const territory = findTerritory(countryParam, territoryParam);
    if (country && territory) {
      axios
        .get(territory.source.apiUrl)
        .then((response) => {
          const historicalRecords = territory.processor(
            response.data,
            territory
          );
          const regions = historicalRecords.subLocations;
          res.status(200);
          res.send({
            regions: regions,
          });
        })
        .catch(() => {
          res.status(500);
          res.send();
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

// GET /covid/historicalRecords/country/:country/territory/:territory/region/:region
regionRouter.get("/:region", (req: Request, res: Response) => {
  const countryParam = req.params.country;
  const territoryParam = req.params.territory;
  const regionParam = req.params.region;
  try {
    const country = findCountry(countryParam);
    const territory = findTerritory(countryParam, territoryParam);
    if (country && territory) {
      axios
        .get(territory.source.apiUrl)
        .then((response) => {
          const regionFromApi: Record = response.data.historical_county.values[0].values.find(
            (region: Record) => {
              return region.County.toLowerCase() === regionParam;
            }
          );
          if (regionFromApi) {
            const regionLocation: LocationClass = {
              name: regionFromApi.County,
              key: buildKeyFromName(regionFromApi.County),
              source: territory.source,
            };

            const locationHistoricalRecordsClass = processRegionCovidData(
              response.data,
              regionLocation
            );
            res.status(200);
            res.send(locationHistoricalRecordsClass);
          } else {
            res.status(404);
            res.statusMessage = `Region "${regionParam}" not found.`;
            res.send();
          }
        })
        .catch(() => {
          res.status(500);
          res.send();
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

export { regionRouter };
