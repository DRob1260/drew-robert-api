import { IllinoisCovidData } from "../../../../../models/covid/IllinoisDepartmentOfHealth/IllinoisCovidData";
import {
  HistoricalRecords,
  HistoricalRecord,
} from "../../../../../models/DrewRobertApi/response/HistoricalRecords";
import { LocationHistoricalRecordsClass } from "../../../../../models/DrewRobertApi/response/LocationHistoricalRecordsClass";
import { LocationClass } from "../../../../../models/DrewRobertApi/response/LocationClass";

const processIllinoisCovidData = (
  illinoisCovidData: IllinoisCovidData,
  location: LocationClass
): LocationHistoricalRecordsClass => {
  const historicalRecords: Array<HistoricalRecord> = [];

  const commonSubLocation = new LocationClass();
  commonSubLocation.source = location.source;

  illinoisCovidData.state_testing_results.values.map((record) => {
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
    location: location,
    subLocations: [],
    historicalRecords: historicalRecords,
  };
};

export { processIllinoisCovidData };
