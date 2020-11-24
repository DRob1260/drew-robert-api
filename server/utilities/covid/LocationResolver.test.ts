import {
  getCountries,
  findCountry,
  getTerritoriesInCountry,
  findTerritory,
} from "./LocationResolver";
import {
  expectedCountries,
  expectedCountry,
  expectedTerritories,
  expectedTerritory,
} from "../../../test/data/covid/utilities";

test("getCountries", () => {
  expect(getCountries()).toEqual(expectedCountries);
});

test("findCountry", () => {
  expect(findCountry("unitedstates")).toEqual(expectedCountry);
});

test("getTerritoriesInCountry", () => {
  expect(getTerritoriesInCountry("unitedstates")).toEqual(expectedTerritories);
});

test("findTerritory", () => {
  expect(findTerritory("unitedstates", "illinois")).toEqual(expectedTerritory);
});
