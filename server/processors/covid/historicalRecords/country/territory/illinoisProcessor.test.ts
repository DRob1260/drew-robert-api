import { processIllinoisCovidData } from "./illinoisProcessor";
import {
  expectedIllinoisLocationHistoricalRecords,
  illinoisCovidData,
  illinoisLocationResolver,
} from "../../../../../../test/data/covid/country/territory/illinois";

test("processIllinoisCovidData", () => {
  expect(
    processIllinoisCovidData(illinoisCovidData, illinoisLocationResolver)
  ).toEqual(expectedIllinoisLocationHistoricalRecords);
});
