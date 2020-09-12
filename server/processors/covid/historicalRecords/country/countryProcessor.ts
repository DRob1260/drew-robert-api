import { HistoricalRecords } from "../../../../models/DrewRobertApi/response/HistoricalRecords";

export const processCountryData = (
  country: string,
  apiData: object[]
): HistoricalRecords => {
  return {
    location: {
      country: country,
    },
    historicalRecords: [],
  };
};
