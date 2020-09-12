import axios from "axios";
import { IllinoisCovidData } from "../../models/covid/IllinoisDepartmentOfHealth/IllinoisCovidData";

const getIllinoisCovidData = () => {
  return new Promise<IllinoisCovidData>((resolve, reject) => {
    axios
      .get(
        "https://www.dph.illinois.gov/sitefiles/COVIDHistoricalTestResults.json?nocache=1"
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { getIllinoisCovidData };
