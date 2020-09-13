import { LocationClass } from "../DrewRobertApi/response/LocationClass";
import { LocationHistoricalRecordsClass } from "../DrewRobertApi/response/LocationHistoricalRecordsClass";

export class LocationResolverClass extends LocationClass {
  key: string;
  name: string;
  source: {
    name: string;
    apiUrl: string;
    infoUrl: string;
  };
  processor: ProcessorFunction;
  subLocations: LocationResolverClass[];

  constructor() {
    super();
    this.processor = (apiData: object, location: LocationClass) => {
      return new LocationHistoricalRecordsClass();
    };
    this.subLocations = [];
  }
}

type ProcessorFunction = (
  apiData: object,
  location: LocationResolverClass
) => LocationHistoricalRecordsClass;
