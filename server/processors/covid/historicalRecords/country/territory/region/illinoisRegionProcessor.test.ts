import { processRegionCovidData } from "./illinoisRegionProcessor";
import { illinoisCovidData } from "../../../../../../../test/data/covid/country/territory/illinois";
import {
  adamsRegionLocation,
  expectedAdamsLocationHistoricalRecords,
} from "../../../../../../../test/data/covid/country/territory/region/region";

test("processRegionCovidData", () => {
  expect(
    processRegionCovidData(illinoisCovidData, adamsRegionLocation)
  ).toEqual(expectedAdamsLocationHistoricalRecords);
});
