import request from "supertest";
import nock from "nock";
import app from "../../../../../../../test/app";
import { regionRouter } from "./regionRouter";
import {
  expectedIllinoisLocationHistoricalRecords,
  illinoisCovidData,
} from "../../../../../../../test/data/covid/country/territory/illinois";
import { expectedAdamsLocationHistoricalRecords } from "../../../../../../../test/data/covid/country/territory/region/region";

app.use("/:country/territory/:territory/", regionRouter);

describe("GET /:country/territory/:territory/", () => {
  nock("https://www.dph.illinois.gov")
    .get("/sitefiles/COVIDHistoricalTestResults.json?nocache=1")
    .reply(200, illinoisCovidData);

  test("with a country that does not exist", async (done) => {
    request(app)
      .get("/fakecountry/territory/illinois")
      .then((request) => {
        expect(request.status).not.toEqual(200);
        expect(request.status).toEqual(404);
      })
      .then(done);
  });
  test("with a territory that does not exist", async (done) => {
    request(app)
      .get("/unitedstates/territory/faketerritory")
      .then((request) => {
        expect(request.status).not.toEqual(200);
        expect(request.status).toEqual(404);
      })
      .then(done);
  });
  test("with a country and territory that exist", async (done) => {
    request(app)
      .get("/unitedstates/territory/illinois")
      .then((request) => {
        expect(request.status).toEqual(200);
        expect(request.body).toEqual({
          regions: expectedIllinoisLocationHistoricalRecords.subLocations,
        });
      })
      .then(done);
  });
});

describe("GET /:country/territory/:territory/:region", () => {
  nock("https://www.dph.illinois.gov")
    .get("/sitefiles/COVIDHistoricalTestResults.json?nocache=1")
    .reply(200, illinoisCovidData);

  test("with a country that does not exist", async (done) => {
    request(app)
      .get("/fakecountry/territory/illinois/adams")
      .then((request) => {
        expect(request.status).not.toEqual(200);
        expect(request.status).toEqual(404);
      })
      .then(done);
  });
  test("with a territory that does not exist", async (done) => {
    request(app)
      .get("/unitedstates/territory/faketerritory/adams")
      .then((request) => {
        expect(request.status).not.toEqual(200);
        expect(request.status).toEqual(404);
      })
      .then(done);
  });
  test("with a country, territory, and region that exist", async (done) => {
    request(app)
      .get("/unitedstates/territory/illinois/adams")
      .then((request) => {
        expect(request.status).toEqual(200);
        expect(request.body).toEqual(expectedAdamsLocationHistoricalRecords);
      })
      .then(done);
  });
});
