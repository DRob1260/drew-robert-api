import request from "supertest";
import nock from "nock";
import app from "../../../../../../test/app";
import { territoryRouter } from "./territoryRouter";
import { expectedTerritories } from "../../../../../../test/data/covid/utilities";
import {
  expectedIllinoisLocationHistoricalRecords,
  illinoisCovidData,
  illinoisLocationResolver,
} from "../../../../../../test/data/covid/country/territory/illinois";

app.use("/:country/", territoryRouter);

describe("GET /:country/", () => {
  test("with a country that exists", async (done) => {
    request(app)
      .get("/unitedstates/")
      .then((request) => {
        expect(request.status).toEqual(200);
        expect(request.body).toEqual({
          territories: expectedTerritories,
          region: "/region",
        });
      })
      .then(done);
  });
  test("with a country that does not exist", () => {
    request(app)
      .get("/fakecountry/")
      .then((request) => {
        expect(request.status).not.toEqual(200);
        expect(request.status).toEqual(404);
      });
  });
});

describe("/:country/territory", () => {
  test("with a country that does not exist", async (done) => {
    request(app)
      .get("/fakecountry/illinois")
      .then((request) => {
        expect(request.status).not.toEqual(200);
        expect(request.status).toEqual(404);
      })
      .then(done);
  });
  test("with a territory that does not exist", async (done) => {
    request(app)
      .get("/unitedstates/faketerritory")
      .then((request) => {
        expect(request.status).not.toEqual(200);
        expect(request.status).toEqual(404);
      })
      .then(done);
  });
  test("with a territory that does exist", async (done) => {
    nock("https://www.dph.illinois.gov")
      .get("/sitefiles/COVIDHistoricalTestResults.json?nocache=1")
      .reply(200, illinoisCovidData);

    request(app)
      .get("/unitedstates/illinois")
      .then((request) => {
        expect(request.status).toEqual(200);
        expect(request.body).toEqual(expectedIllinoisLocationHistoricalRecords);
      })
      .then(done);
  });
});
