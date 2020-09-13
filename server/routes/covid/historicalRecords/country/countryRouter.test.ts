import request from "supertest";
import app from "../../../../../test/app";
import { countryRouter } from "./countryRouter";
import { expectedCountries } from "../../../../../test/data/covid/utilities";
import { expectedLocationHistoricalRecords } from "../../../../../test/data/covid/country/unitedStates";

app.use("/", countryRouter);

test("GET /", async (done) => {
  request(app)
    .get("/")
    .then((request) => {
      expect(request.status).toEqual(200);
      expect(request.body).toEqual({
        countries: expectedCountries,
        territory: "/territory",
      });
    })
    .then(done);
});

describe("GET /:country", () => {
  test("with country that exists", async (done) => {
    request(app)
      .get("/unitedstates")
      .then((request) => {
        expect(request.status).toEqual(200);
        expect(request.body).toEqual(expectedLocationHistoricalRecords);
      })
      .then(done);
  });

  test("with country that does not exist", async (done) => {
    request(app)
      .get("/fakecountry")
      .then((request) => {
        expect(request.status).not.toEqual(200);
        expect(request.status).toEqual(404);
      })
      .then(done);
  });
});

describe("GET /:country/territory", () => {
  test("with country that exists", async (done) => {
    request(app)
      .get("/unitedstates")
      .then((request) => {
        expect(request.status).toEqual(200);
      })
      .then(done);
  });
  test("with county that does not exist", async (done) => {
    request(app)
      .get("/fakecounty")
      .then((request) => {
        expect(request.status).not.toEqual(200);
        expect(request.status).toEqual(404);
      })
      .then(done);
  });
});
