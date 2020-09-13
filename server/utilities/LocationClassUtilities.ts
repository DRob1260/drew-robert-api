import { LocationResolverClass } from "../models/covid/LocationResolverClass";

export const buildKeyFromName = (name: string) => {
  const nameWithoutSpaces = name.replace(/\s/g, "");
  return nameWithoutSpaces.toLowerCase();
};

export const buildLocationClassFromLocationResolverClass = (
  locationResolverClass: LocationResolverClass
) => {
  return {
    name: locationResolverClass.name,
    key: locationResolverClass.key,
    source: locationResolverClass.source,
  };
};
