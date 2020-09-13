import { LocationClass } from "../../../../../../server/models/DrewRobertApi/response/LocationClass";
import { LocationHistoricalRecordsClass } from "../../../../../../server/models/DrewRobertApi/response/LocationHistoricalRecordsClass";

export const adamsRegionLocation: LocationClass = {
  name: "Adams",
  key: "adams",
  source: {
    name: "Illinois Department of Public Health",
    apiUrl:
      "https://www.dph.illinois.gov/sitefiles/COVIDHistoricalTestResults.json?nocache=1",
    infoUrl: "https://www.dph.illinois.gov/covid19/covid19-statistics",
  },
};

export const expectedAdamsLocationHistoricalRecords: LocationHistoricalRecordsClass = {
  location: {
    name: "Adams",
    key: "adams",
    source: {
      name: "Illinois Department of Public Health",
      apiUrl:
        "https://www.dph.illinois.gov/sitefiles/COVIDHistoricalTestResults.json?nocache=1",
      infoUrl: "https://www.dph.illinois.gov/covid19/covid19-statistics",
    },
  },
  subLocations: [],
  historicalRecords: [
    {
      testDate: "9/12/2020",
      totals: {
        cases: 874,
        tested: 27877,
        deaths: 10,
      },
    },
  ],
};
