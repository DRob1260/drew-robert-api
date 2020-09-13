import { IllinoisCovidData } from "../../../../../server/models/covid/IllinoisDepartmentOfHealth/IllinoisCovidData";
import { LocationResolverClass } from "../../../../../server/models/covid/LocationResolverClass";
import { processIllinoisCovidData } from "../../../../../server/processors/covid/historicalRecords/country/territory/illinoisProcessor";

export const illinoisCovidData: IllinoisCovidData = {
  LastUpdateDate: {
    year: 2020,
    month: 9,
    day: 12,
  },
  characteristics_by_county: {
    values: [
      {
        County: "Illinois",
        confirmed_cases: 259909,
        total_tested: 4688976,
        deaths: 8295,
        lat: 39.839888,
        lon: -89.510168,
      },
      {
        County: "Adams",
        confirmed_cases: 874,
        deaths: 10,
        total_tested: 27877,
        lat: 40.0578,
        lon: -91.1353,
      },
      {
        County: "Alexander",
        confirmed_cases: 57,
        deaths: 1,
        total_tested: 1590,
        lat: 37.167,
        lon: -89.3606,
      },
    ],
  },
  state_recovery_data: {
    values: [
      {
        report_date: "9/11/2020",
        sample_surveyed: 255305,
        recovered_cases: 173940,
        recovered_and_deceased_cases: 181759,
        recovery_rate: 0.96,
      },
      {
        report_date: "9/4/2020",
        sample_surveyed: 239970,
        recovered_cases: 164230,
        recovered_and_deceased_cases: 171943,
        recovery_rate: 0.96,
      },
    ],
  },
  probable_case_counts: {
    LastUpdatedDate: "9/11/2020",
    probable_cases: 2095,
    probable_deaths: 232,
  },
  historical_county: {
    values: [
      {
        testDate: "9/12/2020",
        values: [
          {
            County: "Illinois",
            confirmed_cases: 259909,
            total_tested: 4688976,
            deaths: 8295,
            lat: 39.839888,
            lon: -89.510168,
          },
          {
            County: "Adams",
            confirmed_cases: 874,
            deaths: 10,
            total_tested: 27877,
            lat: 40.0578,
            lon: -91.1353,
          },
          {
            County: "Alexander",
            confirmed_cases: 57,
            deaths: 1,
            total_tested: 1590,
            lat: 37.167,
            lon: -89.3606,
          },
        ],
      },
    ],
  },
  demographics: {
    age: [
      {
        age_group: "Unknown",
        count: 67,
        tested: 215536,
        deaths: 0,
        demographics: {
          race: [
            {
              description: "White",
              count: 8,
              tested: 440,
              deaths: 0,
              color: "rgb(31,119,180)",
            },
            {
              description: "Black",
              count: 2,
              tested: 134,
              deaths: 0,
              color: "rgb(31,119,180)",
            },
          ],
        },
      },
    ],
  },
  state_testing_results: {
    values: [
      {
        testDate: "3/10/2020",
        total_tested: 326,
        confirmed_cases: 20,
        deaths: 0,
      },
      {
        testDate: "3/11/2020",
        total_tested: 367,
        confirmed_cases: 25,
        deaths: 0,
      },
    ],
  },
};

export const illinoisLocationResolver: LocationResolverClass = {
  name: "Illinois",
  key: "illinois",
  source: {
    name: "Illinois Department of Public Health",
    apiUrl:
      "https://www.dph.illinois.gov/sitefiles/COVIDHistoricalTestResults.json?nocache=1",
    infoUrl: "https://www.dph.illinois.gov/covid19/covid19-statistics",
  },
  subLocations: [],
  processor: processIllinoisCovidData,
};

export const expectedIllinoisLocationHistoricalRecords = {
  location: {
    name: "Illinois",
    key: "illinois",
    source: {
      name: "Illinois Department of Public Health",
      apiUrl:
        "https://www.dph.illinois.gov/sitefiles/COVIDHistoricalTestResults.json?nocache=1",
      infoUrl: "https://www.dph.illinois.gov/covid19/covid19-statistics",
    },
  },
  subLocations: [
    {
      key: "adams",
      name: "Adams",
      source: {
        name: "Illinois Department of Public Health",
        apiUrl:
          "https://www.dph.illinois.gov/sitefiles/COVIDHistoricalTestResults.json?nocache=1",
        infoUrl: "https://www.dph.illinois.gov/covid19/covid19-statistics",
      },
    },
    {
      key: "alexander",
      name: "Alexander",
      source: {
        name: "Illinois Department of Public Health",
        apiUrl:
          "https://www.dph.illinois.gov/sitefiles/COVIDHistoricalTestResults.json?nocache=1",
        infoUrl: "https://www.dph.illinois.gov/covid19/covid19-statistics",
      },
    },
  ],
  historicalRecords: [
    {
      testDate: "3/10/2020",
      totals: {
        cases: 20,
        deaths: 0,
        tested: 326,
      },
    },
    {
      testDate: "3/11/2020",
      totals: {
        cases: 25,
        deaths: 0,
        tested: 367,
      },
    },
  ],
};
