import {
  buildKeyFromName,
  buildLocationClassFromLocationResolverClass,
} from "./LocationClassUtilities";
import {
  expectedLocationClass,
  locationResolverClass,
} from "../../test/data/covid/utilities";

test("buildKeyFromName", () => {
  expect(buildKeyFromName("My Name")).toEqual("myname");
});

test("buildLocationClassFromLocationResolverClass", () => {
  expect(
    buildLocationClassFromLocationResolverClass(locationResolverClass)
  ).toEqual(expectedLocationClass);
});
