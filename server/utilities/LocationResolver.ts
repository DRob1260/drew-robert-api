import { LocationResolverClass } from "../models/covid/LocationResolverClass";
import { processIllinoisCovidData } from "../processors/covid/historicalRecords/country/territory/illinoisProcessor";
import { unitedStatesProcessor } from "../processors/covid/historicalRecords/country/unitedStatesProcessor";
import { LocationClass } from "../models/DrewRobertApi/response/LocationClass";
import { buildLocationClassFromLocationResolverClass } from "./LocationClassUtilities";

export const locationResolverList: LocationResolverClass[] = [
  {
    key: "unitedstates",
    name: "United State of America",
    source: {
      name: "",
      apiUrl: "",
      infoUrl: "",
    },
    processor: unitedStatesProcessor,
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
  },
];

export const getCountries = (): LocationClass[] => {
  return locationResolverList.map((location) => {
    return buildLocationClassFromLocationResolverClass(location);
  });
};

export const findCountry = (countryKey: string) => {
  return locationResolverList.find((c) => {
    return c.key === countryKey.toLowerCase();
  });
};

export const getTerritoriesInCountry = (countryKey: string) => {
  let territoryList: LocationClass[] = [];
  const country = findCountry(countryKey);
  if (country) {
    country.subLocations.forEach((subLoc) => {
      territoryList.push(buildLocationClassFromLocationResolverClass(subLoc));
    });
  }
  return territoryList;
};

export const findTerritory = (countryKey: string, territoryKey: string) => {
  const country = findCountry(countryKey);
  if (country) {
    return country.subLocations.find((subLoc) => {
      return subLoc.key === territoryKey.toLowerCase();
    });
  } else return null;
};
