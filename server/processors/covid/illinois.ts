import { IllinoisCovidData } from "../../models/covid/IllinoisCovidData";
import { HistoricalRecord } from "../../models/covid/response/HistoricalRecord";
import { RegionData } from "../../models/covid/response/RegionData";

const processIllinoisCovidData = (
  illinoisCovidData: IllinoisCovidData
): RegionData => {
  const historicalRecords: Array<HistoricalRecord> = [];
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
    region: {
      name: "Illinois",
      lat: 40.6331,
      long: -89.3985,
    },
    historicalRecords: historicalRecords,
  };
};

const processIllinoisCountyCovidData = (
  illinoisCovidData: IllinoisCovidData,
  county: string
): RegionData => {
  let lat = 0;
  let long = 0;
  let name = county;

  const historicalRecords: Array<HistoricalRecord> = [];
  illinoisCovidData.historical_county.values.forEach((historicalValue) => {
    historicalValue.values.forEach((value) => {
      if (value.County.toLowerCase() === county) {
        lat = value.lat;
        long = value.lon;
        name = value.County;

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
    region: {
      name: name,
      lat: lat,
      long: long,
    },
    historicalRecords: historicalRecords,
  };
};

export { processIllinoisCovidData, processIllinoisCountyCovidData };
