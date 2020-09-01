import { IllinoisCovidData } from "../../models/covid/IllinoisCovidData";
import { HistoricalRecord } from "../../models/covid/response/HistoricalRecord";

const processIllinoisCovidData = (
  illinoisCovidData: IllinoisCovidData
): Array<HistoricalRecord> => {
  const historicalRecords: Array<HistoricalRecord> = [];

  illinoisCovidData.historical_county.values.forEach((historicalValue) => {
    historicalValue.values.forEach((value) => {
      if (value.County.toLowerCase() === "illinois") {
        historicalRecords.push({
          testDate: historicalValue.testDate,
          region: value.County,
          totals: {
            cases: value.confirmed_cases,
            tested: value.total_tested,
            deaths: value.deaths,
          },
          lat: value.lat,
          long: value.lon,
        });
      }
    });
  });

  return historicalRecords;
};

const processIllinoisCountyCovidData = (
  illinoisCovidData: IllinoisCovidData,
  county: string
): Array<HistoricalRecord> => {
  const historicalRecords: Array<HistoricalRecord> = [];

  illinoisCovidData.historical_county.values.forEach((historicalValue) => {
    historicalValue.values.forEach((value) => {
      if (value.County.toLowerCase() === county) {
        historicalRecords.push({
          testDate: historicalValue.testDate,
          region: value.County,
          totals: {
            cases: value.confirmed_cases,
            tested: value.total_tested,
            deaths: value.deaths,
          },
          lat: value.lat,
          long: value.lon,
        });
      }
    });
  });

  return historicalRecords;
};

export { processIllinoisCovidData, processIllinoisCountyCovidData };
