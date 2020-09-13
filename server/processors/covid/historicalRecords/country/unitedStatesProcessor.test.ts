import { processUnitedStatesCovidData } from "./unitedStatesProcessor";
import {
  expectedLocationHistoricalRecords,
  unitedStatesLocation,
} from "../../../../../test/data/covid/country/unitedStates";

test("processUnitedStatesCovidData", () => {
  expect(processUnitedStatesCovidData([], unitedStatesLocation)).toEqual(
    expectedLocationHistoricalRecords
  );
});
