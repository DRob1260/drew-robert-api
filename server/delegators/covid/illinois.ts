import axios from "axios";
import { IllinoisCovidData } from "../../models/covid/IllinoisCovidData";

const getIllinoisCovidData = () => {
  return new Promise<IllinoisCovidData>((resolve, reject) => {
    axios
      .get(
        "https://dph.illinois.gov/sitefiles/COVIDCountyRiskMetrics.json?nocache=1"
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
