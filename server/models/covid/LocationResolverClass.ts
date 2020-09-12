import { LocationClass } from "../DrewRobertApi/response/LocationClass";

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
    this.processor = () => {
      return [];
    };
    this.subLocations = [];
  }
}

type ProcessorFunction = () => any;
