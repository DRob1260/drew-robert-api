import { IllinoisCovidData } from "../../../../../../models/covid/IllinoisDepartmentOfHealth/IllinoisCovidData";
import {
  HistoricalRecord,
  LocationHistoricalRecordsClass,
} from "../../../../../../models/DrewRobertApi/response/LocationHistoricalRecordsClass";
import { LocationClass } from "../../../../../../models/DrewRobertApi/response/LocationClass";
import { buildLocationClassFromLocationResolverClass } from "../../../../../../utilities/LocationClassUtilities";

export const processRegionCovidData = (
  apiData: IllinoisCovidData,
  location: LocationClass
): LocationHistoricalRecordsClass => {
  const historicalRecords: Array<HistoricalRecord> = [];
  const subLocations: LocationClass[] = [];

  apiData.historical_county.values.forEach((record) => {
    const regionRecord = record.values.find((county) => {
      return county.County.toLowerCase() === location.key;
    });
    if (regionRecord)
      historicalRecords.push({
        testDate: record.testDate,
        totals: {
          cases: regionRecord.confirmed_cases,
          tested: regionRecord.total_tested,
          deaths: regionRecord.deaths,
        },
      });
  });

  return {
    location: location,
    subLocations: subLocations,
    historicalRecords: historicalRecords,
  };
};
