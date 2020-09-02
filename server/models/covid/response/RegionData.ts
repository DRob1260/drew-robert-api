import { HistoricalRecord } from "./HistoricalRecord";

export interface RegionData {
  region: {
    name: string;
    lat: number;
    long: number;
  };
  historicalRecords: Array<HistoricalRecord>;
}
