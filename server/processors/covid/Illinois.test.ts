import {
  processIllinoisCovidData,
  processIllinoisCountyCovidData,
} from "./illinois";
import { illinoisCovidData } from "../../../test/data/covid/illinois/illinois";
import { RegionData } from "../../models/covid/response/RegionData";

it("processes illinois covid data", () => {
  expect(processIllinoisCovidData(illinoisCovidData)).toEqual(
    expectedIllinoisCovidData
  );
});

it("processes illinois county covid data", () => {
  expect(processIllinoisCountyCovidData(illinoisCovidData, "adams")).toEqual(
    expectedIllinoisCovidCountyData
  );
});

const expectedIllinoisCovidData: RegionData = {
  region: {
    name: "Illinois",
    lat: 40.6331,
    long: -89.3985,
    subRegions: ["Adams", "Alexander"],
  },
  historicalRecords: [
    {
      testDate: "6/07/2020",
      totals: {
        cases: 127757,
        tested: 1042774,
        deaths: 5901,
      },
    },
    {
      testDate: "6/14/2020",
      totals: {
        cases: 132543,
        tested: 1190985,
        deaths: 6307,
      },
    },
    {
      testDate: "6/21/2020",
      totals: {
        cases: 136762,
        deaths: 6645,
        tested: 1360784,
      },
    },
  ],
};

const expectedIllinoisCovidCountyData: RegionData = {
  region: {
    name: "Adams",
    lat: 40.0578,
    long: -91.1353,
    subRegions: [],
  },
  historicalRecords: [
    {
      testDate: "8/23/2020",
      totals: {
        cases: 713,
        tested: 23343,
        deaths: 7,
      },
    },
    {
      testDate: "8/16/2020",
      totals: {
        cases: 643,
        tested: 21639,
        deaths: 7,
      },
    },
  ],
};
