export interface HistoricalRecords {
  location: HistoricalRecordsLocation;
  historicalRecords: HistoricalRecord[];
}

export interface HistoricalRecord {
  testDate: string;
  totals: {
    cases: number;
    tested: number;
    deaths: number;
  };
}

export interface HistoricalRecordsLocation {
  country: string;
  territory?: string;
  region?: string;
  postalCode?: string;
  city?: string;
}
