import { LocationHistoricalRecordsClass } from "../../../server/models/DrewRobertApi/covid/response/LocationHistoricalRecordsClass";
import { LocationResolverClass } from "../../../server/models/covid/LocationResolverClass";
import { LocationClass } from "../../../server/models/DrewRobertApi/covid/response/LocationClass";
import { processUnitedStatesCovidData } from "../../../server/processors/covid/historicalRecords/country/unitedStatesProcessor";
import { processIllinoisCovidData } from "../../../server/processors/covid/historicalRecords/country/territory/illinoisProcessor";

const locationHistoricalRecords = new LocationHistoricalRecordsClass();

export const locationResolverClass: LocationResolverClass = {
  name: "My Location",
  key: "mylocation",
  source: {
    apiUrl: "http://fakeapiurl.com",
    infoUrl: "http://fakeinfourl.com",
    name: "My Fake Source",
  },
  subLocations: [],
  processor: () => {
    return locationHistoricalRecords;
  },
};

export const expectedLocationClass: LocationClass = {
  name: "My Location",
  key: "mylocation",
  source: {
    apiUrl: "http://fakeapiurl.com",
    infoUrl: "http://fakeinfourl.com",
    name: "My Fake Source",
  },
};

export const expectedCountries: LocationClass[] = [
  {
    key: "unitedstates",
    name: "United States of America",
    source: {
      name: "",
      apiUrl: "",
      infoUrl: "",
    },
  },
];

export const expectedCountry: LocationResolverClass = {
  key: "unitedstates",
  name: "United States of America",
  source: {
    name: "",
    apiUrl: "",
    infoUrl: "",
  },
  processor: processUnitedStatesCovidData,
  subLocations: [
    {
      key: "illinois",
      name: "Illinois",
      source: {
        name: "Illinois Department of Public Health",
        apiUrl:
          "https://www.dph.illinois.gov/sitefiles/COVIDHistoricalTestResults.json?nocache=1",
        infoUrl: "https://www.dph.illinois.gov/covid19/covid19-statistics",
      },
      processor: processIllinoisCovidData,
      subLocations: [],
    },
  ],
};

export const expectedTerritories = [
  {
    key: "illinois",
    name: "Illinois",
    source: {
      name: "Illinois Department of Public Health",
      apiUrl:
        "https://www.dph.illinois.gov/sitefiles/COVIDHistoricalTestResults.json?nocache=1",
      infoUrl: "https://www.dph.illinois.gov/covid19/covid19-statistics",
    },
  },
];

export const expectedTerritory: LocationResolverClass = {
  key: "illinois",
  name: "Illinois",
  source: {
    name: "Illinois Department of Public Health",
    apiUrl:
      "https://www.dph.illinois.gov/sitefiles/COVIDHistoricalTestResults.json?nocache=1",
    infoUrl: "https://www.dph.illinois.gov/covid19/covid19-statistics",
  },
  processor: processIllinoisCovidData,
  subLocations: [],
};
