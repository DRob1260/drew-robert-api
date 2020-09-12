import { IllinoisCovidData } from "../../../../../models/covid/IllinoisDepartmentOfHealth/IllinoisCovidData";
import {
  HistoricalRecord,
  HistoricalRecords,
} from "../../../../../models/DrewRobertApi/response/HistoricalRecords";

const processRegionData = (
  country: string,
  region: string,
  apiData: IllinoisCovidData
): HistoricalRecords => {
  const historicalRecords: HistoricalRecord[] = [];
  apiData.historical_county.values.forEach((historicalValue) => {
    historicalValue.values.forEach((value) => {
      if (value.County.toLowerCase() === region) {
        historicalRecords.push({
          testDate: historicalValue.testDate,
          totals: {
            cases: value.confirmed_cases,
            tested: value.total_tested,
            deaths: value.deaths,
          },
        });
      }
    });
  });

  return {
    location: {
      country: country,
      region: region,
    },
    historicalRecords: historicalRecords,
  };
};
