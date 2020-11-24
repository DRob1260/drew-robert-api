import {
  Record,
  IllinoisCovidData,
} from "../../../../../../models/covid/IllinoisDepartmentOfHealth/IllinoisCovidData";
import {
  HistoricalRecord,
  LocationHistoricalRecordsClass,
} from "../../../../../../models/DrewRobertApi/covid/response/LocationHistoricalRecordsClass";
import { LocationClass } from "../../../../../../models/DrewRobertApi/covid/response/LocationClass";
import { calculatePositivityRate } from "../../../../../../utilities/covid/RateCalculator";

export const processRegionCovidData = (
  apiData: IllinoisCovidData,
  location: LocationClass
): LocationHistoricalRecordsClass => {
  const historicalRecords: Array<HistoricalRecord> = [];
  const subLocations: LocationClass[] = [];

  let previousRegionRecord: Record;
  apiData.historical_county.values.forEach((countyRecord) => {
    const regionRecord = countyRecord.values.find((county) => {
      return county.County.toLowerCase() === location.key;
    });
    if (regionRecord) {
      const positivity = previousRegionRecord
        ? calculatePositivityRate(
            {
              positive: regionRecord.confirmed_cases,
              tested: regionRecord.total_tested,
            },
            {
              positive: previousRegionRecord.confirmed_cases,
              tested: previousRegionRecord.total_tested,
            }
          )
        : 0.0;

      historicalRecords.push({
        testDate: countyRecord.testDate,
        totals: {
          cases: regionRecord.confirmed_cases,
          tested: regionRecord.total_tested,
          deaths: regionRecord.deaths,
        },
        rates: {
          positivity: positivity,
        },
      });
      previousRegionRecord = regionRecord;
    }
  });

  return {
    location: location,
    subLocations: subLocations,
    historicalRecords: historicalRecords,
  };
};
