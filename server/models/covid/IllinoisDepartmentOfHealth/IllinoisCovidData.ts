export interface IllinoisCovidData {
  LastUpdateDate: LastUpdateDate;
  characteristics_by_county: CharacteristicsByCounty;
  state_testing_results: StateTestingResults;
  demographics: Demographics;
  state_recovery_data: StateRecoveryData;
  probable_case_counts: ProbableCaseCounts;
  historical_county: HistoricalCounty;
}

export interface LastUpdateDate {
  year: number;
  month: number;
  day: number;
}

export interface CharacteristicsByCounty {
  values: Array<Record>;
}

export interface StateTestingResults {
  values: Array<{
    testDate: string;
    total_tested: number;
    confirmed_cases: number;
    deaths: number;
  }>;
}

export interface Demographics {
  age: Array<{
    age_group: string;
    count: number;
    tested: number;
    deaths: number;
    demographics: Array<Record>;
  }>;
}

export interface StateRecoveryData {
  values: Array<{
    report_date: string;
    sample_surveyed: number;
    recovered_cases: number;
    recovered_and_deceased_cases: number;
    recovery_rate: number;
  }>;
}

export interface ProbableCaseCounts {
  LastUpdatedDate: string;
  probable_cases: number;
  probable_deaths: number;
}

export interface HistoricalCounty {
  values: Array<{
    testDate: string;
    values: Array<Record>;
  }>;
}

export interface Record {
  County: string;
  confirmed_cases: number;
  total_tested: number;
  deaths: number;
  lat: number;
  lon: number;
}
