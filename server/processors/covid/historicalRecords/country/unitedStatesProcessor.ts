import { LocationClass } from "../../../../models/DrewRobertApi/covid/response/LocationClass";
import { LocationHistoricalRecordsClass } from "../../../../models/DrewRobertApi/covid/response/LocationHistoricalRecordsClass";
import { LocationResolverClass } from "../../../../models/covid/LocationResolverClass";
import { buildLocationClassFromLocationResolverClass } from "../../../../utilities/covid/LocationClassUtilities";

export const processUnitedStatesCovidData = (
  apiData: object[],
  location: LocationResolverClass
): LocationHistoricalRecordsClass => {
  const subLocations: LocationClass[] = location.subLocations.map(
    (location) => {
      return buildLocationClassFromLocationResolverClass(location);
    }
  );

  const unitedStatesLocation = buildLocationClassFromLocationResolverClass(
    location
  );

  return {
    location: unitedStatesLocation,
    subLocations: subLocations,
    historicalRecords: [],
  };
};
