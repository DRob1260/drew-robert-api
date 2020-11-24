import { LocationResolverClass } from "../../../../server/models/covid/LocationResolverClass";
import { illinoisLocationResolver } from "./territory/illinois";
import { processUnitedStatesCovidData } from "../../../../server/processors/covid/historicalRecords/country/unitedStatesProcessor";
import { LocationHistoricalRecordsClass } from "../../../../server/models/DrewRobertApi/covid/response/LocationHistoricalRecordsClass";

export const unitedStatesLocation: LocationResolverClass = {
  name: "United States of America",
  key: "unitedstates",
  source: {
    name: "",
    apiUrl: "",
    infoUrl: "",
  },
  subLocations: [illinoisLocationResolver],
  processor: processUnitedStatesCovidData,
};

export const expectedLocationHistoricalRecords: LocationHistoricalRecordsClass = {
  location: {
    name: "United States of America",
    key: "unitedstates",
    source: {
      name: "",
      apiUrl: "",
      infoUrl: "",
    },
  },
  subLocations: [
    {
      name: "Illinois",
      key: "illinois",
      source: {
        name: "Illinois Department of Public Health",
        apiUrl:
          "https://www.dph.illinois.gov/sitefiles/COVIDHistoricalTestResults.json?nocache=1",
        infoUrl: "https://www.dph.illinois.gov/covid19/covid19-statistics",
      },
    },
  ],
  historicalRecords: [],
};
