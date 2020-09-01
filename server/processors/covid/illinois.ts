import { IllinoisCovidData } from "../../models/covid/IllinoisCovidData";
import { HistoricalCountyRecord } from "../../models/covid/response/HistoricalCounty";

const processIllinoisCovidData = (
  illinoisCovidData: IllinoisCovidData,
  county: string
): Array<HistoricalCountyRecord> => {
  const historicalCountyRecords: Array<HistoricalCountyRecord> = [];

  illinoisCovidData.historical_county.values.forEach((historicalValue) => {
    historicalValue.values.forEach((value) => {
      if (value.County.toLowerCase() === county) {
        historicalCountyRecords.push({
          testDate: historicalValue.testDate,
          county: value.County,
          confirmedCases: value.confirmed_cases,
          totalTested: value.total_tested,
          deaths: value.deaths,
          lat: value.lat,
          long: value.lon,
        });
      }
    });
  });

  return historicalCountyRecords;
};

export { processIllinoisCovidData };
