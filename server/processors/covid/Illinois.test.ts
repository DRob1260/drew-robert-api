import {
  processIllinoisCovidData,
  processIllinoisCountyCovidData,
} from "./illinois";
import { illinoisCovidData } from "../../../test/data/covid/illinois/illinois";
import { HistoricalRecord } from "../../models/covid/response/HistoricalRecord";

it("extracts illinois historical data", () => {
  expect(processIllinoisCovidData(illinoisCovidData)).toEqual(
    expectedIllinoisHistoricalRecords
  );
});

it("extracts illinois county historical data", () => {
  expect(processIllinoisCountyCovidData(illinoisCovidData, "adams")).toEqual(
    expectedIllinoisCountyHistoricalRecords
  );
});

const expectedIllinoisHistoricalRecords: HistoricalRecord[] = [
  {
    testDate: "8/23/2020",
    region: "Illinois",
    totals: {
      cases: 220178,
      tested: 3704036,
      deaths: 7880,
    },
    lat: 39.839888,
    long: -89.510168,
  },
  {
    testDate: "8/16/2020",
    region: "Illinois",
    totals: {
      cases: 206081,
      tested: 3366851,
      deaths: 7744,
    },
    lat: 39.839888,
    long: -89.510168,
  },
];

const expectedIllinoisCountyHistoricalRecords: HistoricalRecord[] = [
  {
    testDate: "8/23/2020",
    region: "Adams",
    totals: {
      cases: 713,
      tested: 23343,
      deaths: 7,
    },
    lat: 40.0578,
    long: -91.1353,
  },
  {
    testDate: "8/16/2020",
    region: "Adams",
    totals: {
      cases: 643,
      tested: 21639,
      deaths: 7,
    },
    lat: 40.0578,
    long: -91.1353,
  },
];
