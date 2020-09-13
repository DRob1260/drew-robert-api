import {
  buildKeyFromName,
  buildLocationClassFromLocationResolverClass,
} from "../../../../../utilities/LocationClassUtilities";
import { IllinoisCovidData } from "../../../../../models/covid/IllinoisDepartmentOfHealth/IllinoisCovidData";
import { HistoricalRecord } from "../../../../../models/DrewRobertApi/response/LocationHistoricalRecordsClass";
import { LocationHistoricalRecordsClass } from "../../../../../models/DrewRobertApi/response/LocationHistoricalRecordsClass";
import { LocationClass } from "../../../../../models/DrewRobertApi/response/LocationClass";
import { LocationResolverClass } from "../../../../../models/covid/LocationResolverClass";

export const processIllinoisCovidData = (
  apiData: IllinoisCovidData,
  location: LocationResolverClass
): LocationHistoricalRecordsClass => {
  const historicalRecords: Array<HistoricalRecord> = [];

  const commonSource = location.source;

  const illinoisLocation: LocationClass = buildLocationClassFromLocationResolverClass(
    location
  );

  const subLocations: LocationClass[] = apiData.historical_county.values[0].values
    .map((county) => {
      return {
        key: buildKeyFromName(county.County),
        name: county.County,
        source: commonSource,
      };
    })
    .filter((subLoc) => {
      return subLoc.key !== illinoisLocation.key;
    });

  apiData.state_testing_results.values.forEach((record) => {
    historicalRecords.push({
      testDate: record.testDate,
      totals: {
        cases: record.confirmed_cases,
        tested: record.total_tested,
        deaths: record.deaths,
      },
    });
  });

  return {
    location: illinoisLocation,
    subLocations: subLocations,
    historicalRecords: historicalRecords,
  };
};
