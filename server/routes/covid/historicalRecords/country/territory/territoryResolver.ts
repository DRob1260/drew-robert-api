import { processIllinoisCovidData } from "../../../../../processors/covid/historicalRecords/country/territory/illinoisProcessor";

export const territoryResolver = [
  {
    territory: "illinois",
    country: "unitedstates",
    api: {
      historicalRecords: {
        url:
          "https://www.dph.illinois.gov/sitefiles/COVIDHistoricalTestResults.json?nocache=1",
        processor: processIllinoisCovidData,
      },
    },
  },
];
