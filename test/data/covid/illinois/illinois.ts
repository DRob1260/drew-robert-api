import { IllinoisCovidData } from "../../../../server/models/covid/IllinoisCovidData";

const illinoisCovidData: IllinoisCovidData = {
  LastUpdateDate: {
    periodBeginYear: 2020,
    periodBeginMonth: 8,
    periodBeginDay: 16,
    year: 2020,
    month: 8,
    day: 22,
    mmwrWeekNumber: 34,
    lastUpdatedYear: 2020,
    lastUpdatedMonth: 8,
    lastUpdatedDay: 28,
  },
  CurrentMMWRWeek: "2020-34",
  PriorMMWRWeek: "2020-33",
  Prior2MMWRWeek: "2020-32",
  historical_county: {
    values: [
      {
        testDate: "8/23/2020",
        values: [
          {
            County: "Illinois",
            confirmed_cases: 220178,
            total_tested: 3704036,
            deaths: 7880,
            lat: 39.839888,
            lon: -89.510168,
          },
          {
            County: "Adams",
            confirmed_cases: 713,
            deaths: 7,
            total_tested: 23343,
            lat: 40.0578,
            lon: -91.1353,
          },
          {
            County: "Alexander",
            confirmed_cases: 40,
            deaths: 0,
            total_tested: 1373,
            lat: 37.167,
            lon: -89.3606,
          },
        ],
      },
      {
        testDate: "8/16/2020",
        values: [
          {
            County: "Illinois",
            confirmed_cases: 206081,
            total_tested: 3366851,
            deaths: 7744,
            lat: 39.839888,
            lon: -89.510168,
          },
          {
            County: "Adams",
            confirmed_cases: 643,
            deaths: 7,
            total_tested: 21639,
            lat: 40.0578,
            lon: -91.1353,
          },
          {
            County: "Alexander",
            confirmed_cases: 40,
            deaths: 0,
            total_tested: 1325,
            lat: 37.167,
            lon: -89.3606,
          },
        ],
      },
    ],
  },
  state_testing_results: {
    values: [
      {
        testDate: "6/07/2020",
        total_tested: 1042774,
        confirmed_cases: 127757,
        deaths: 5901,
      },
      {
        testDate: "6/14/2020",
        total_tested: 1190985,
        confirmed_cases: 132543,
        deaths: 6307,
      },
      {
        testDate: "6/21/2020",
        total_tested: 1360784,
        confirmed_cases: 136762,
        deaths: 6645,
      },
    ],
  },
  testPositivity: [
    {
      report_date: "8/28/2020",
      values: [
        {
          County: "Illinois",
          testPositivity: 0.0537125,
          clusterPct: 8.0,
        },
        {
          County: "Adams",
          testPositivity: 0.0481221,
          clusterPct: 13.1,
        },
        {
          County: "Alexander",
          testPositivity: 0,
          clusterPct: "<5",
        },
      ],
    },
    {
      report_date: "8/21/2020",
      values: [
        {
          County: "Illinois",
          testPositivity: 0.0526087,
          clusterPct: 7.9,
        },
        {
          County: "Adams",
          testPositivity: 0.0597468,
          clusterPct: 10.8,
        },
        {
          County: "Alexander",
          testPositivity: 0.0225564,
          clusterPct: "<5",
        },
      ],
    },
  ],
  icuAvailAvg: [
    {
      report_date: "8/28/2020",
      values: [
        {
          id: 1,
          ICUAvail: 0.53462258265751715533,
        },
      ],
    },
    {
      report_date: "8/21/2020",
      values: [
        {
          id: 1,
          ICUAvail: 0.5589519650655021834,
        },
      ],
    },
  ],
  historical_demographics: [
    {
      reported_date: "2020-08-16",
      county_demographics: [
        {
          County: "Adams",
          confirmed_cases: 643,
          total_tested: 21639,
          demographics: {
            age: [
              {
                age_group: "Unknown",
                count: 0,
                tested: 0,
              },
              {
                age_group: "<20",
                count: 67,
                tested: 1717,
              },
              {
                age_group: "20-29",
                count: 106,
                tested: 2820,
              },
              {
                age_group: "30-39",
                count: 96,
                tested: 2893,
              },
              {
                age_group: "40-49",
                count: 91,
                tested: 2730,
              },
              {
                age_group: "50-59",
                count: 115,
                tested: 3537,
              },
              {
                age_group: "60-69",
                count: 93,
                tested: 2503,
              },
              {
                age_group: "70-79",
                count: 48,
                tested: 2256,
              },
              {
                age_group: "80+",
                count: 27,
                tested: 3179,
              },
            ],
            race: [
              {
                description: "White",
                count: 331,
                tested: 8470,
                color: "rgb(31,119,180)",
              },
              {
                description: "Black",
                count: 46,
                tested: 276,
                color: "rgb(255,127,14)",
              },
              {
                description: "Left Blank",
                count: 259,
                tested: 12705,
                color: "rgb(44,160,44)",
              },
              {
                description: "Other",
                count: 0,
                tested: 39,
                color: "rgb(148,103,189)",
              },
              {
                description: "Asian",
                count: 0,
                tested: 32,
                color: "rgb(140,86,75)",
              },
              {
                description: "Hispanic",
                count: 0,
                tested: 102,
                color: "rgb(214,39,40)",
              },
              {
                description: "NH/PI*",
                count: 0,
                tested: 7,
                color: "rgb(127,127,127)",
              },
              {
                description: "AI/AN**",
                count: 0,
                tested: 8,
                color: "rgb(31,119,180)",
              },
            ],
            gender: [
              {
                description: "Male",
                count: 295,
                tested: 8591,
                color: "rgb(31,119,180)",
              },
              {
                description: "Female",
                count: 341,
                tested: 11552,
                color: "rgb(255,127,14)",
              },
              {
                description: "Unknown/Left Blank",
                count: 7,
                tested: 1496,
                color: "rgb(44,160,44)",
              },
            ],
          },
        },
        {
          County: "Alexander",
          confirmed_cases: 40,
          total_tested: 1325,
          demographics: {
            age: [
              {
                age_group: "Unknown",
                count: 0,
                tested: 0,
              },
              {
                age_group: "<20",
                count: 0,
                tested: 75,
              },
              {
                age_group: "20-29",
                count: 0,
                tested: 144,
              },
              {
                age_group: "30-39",
                count: 9,
                tested: 131,
              },
              {
                age_group: "40-49",
                count: 0,
                tested: 165,
              },
              {
                age_group: "50-59",
                count: 12,
                tested: 309,
              },
              {
                age_group: "60-69",
                count: 0,
                tested: 252,
              },
              {
                age_group: "70-79",
                count: 0,
                tested: 120,
              },
              {
                age_group: "80+",
                count: 0,
                tested: 129,
              },
            ],
            race: [
              {
                description: "White",
                count: 18,
                tested: 425,
                color: "rgb(31,119,180)",
              },
              {
                description: "Black",
                count: 17,
                tested: 392,
                color: "rgb(255,127,14)",
              },
              {
                description: "Left Blank",
                count: 0,
                tested: 499,
                color: "rgb(44,160,44)",
              },
              {
                description: "Other",
                count: 0,
                tested: 0,
                color: "rgb(148,103,189)",
              },
              {
                description: "Asian",
                count: 0,
                tested: 0,
                color: "rgb(140,86,75)",
              },
              {
                description: "Hispanic",
                count: 0,
                tested: 0,
                color: "rgb(214,39,40)",
              },
              {
                description: "NH/PI*",
                count: 0,
                tested: 0,
                color: "rgb(127,127,127)",
              },
              {
                description: "AI/AN**",
                count: 0,
                tested: 0,
                color: "rgb(31,119,180)",
              },
            ],
            gender: [
              {
                description: "Male",
                count: 11,
                tested: 461,
                color: "rgb(31,119,180)",
              },
              {
                description: "Female",
                count: 28,
                tested: 773,
                color: "rgb(255,127,14)",
              },
              {
                description: "Unknown/Left Blank",
                count: 0,
                tested: 91,
                color: "rgb(44,160,44)",
              },
            ],
          },
        },
      ],
    },
  ],
};

export { illinoisCovidData };
