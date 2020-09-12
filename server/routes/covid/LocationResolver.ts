import { LocationResolverClass } from "../../models/covid/LocationResolverClass";
import { processIllinoisCovidData } from "../../processors/covid/historicalRecords/country/territory/illinoisProcessor";

const LocationResolver: LocationResolverClass[] = [
  {
    key: "unitedstates",
    name: "United State of America",
    source: {
      name: "",
      apiUrl: "",
      infoUrl: "",
    },
    processor: () => [],
    subLocations: [
      {
        key: "illinois",
        name: "Illinois",
        source: {
          name: "Illinois Department of Public Health",
          apiUrl:
            "https://www.dph.illinois.gov/sitefiles/COVIDHistoricalTestResults.json?nocache=1",
          infoUrl: "https://www.dph.illinois.gov/covid19/covid19-statistics",
        },
        processor: processIllinoisCovidData,
      },
    ],
  },
];
