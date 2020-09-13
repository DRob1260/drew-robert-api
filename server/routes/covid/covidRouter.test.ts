import request from "supertest";
import app from "../../../test/app";
import { covidRouter } from "./covidRouter";

app.use("/", covidRouter);

test("GET /", async (done) => {
  request(app)
    .get("/")
    .then((request) => {
      expect(request.status).toEqual(200);
      expect(request.body).toEqual({
        historicalRecords: "/historicalRecords",
      });
    })
    .then(done);
});

test("GET /historicalRecords", async (done) => {
  request(app)
    .get("/historicalRecords")
    .then((request) => {
      expect(request.status).toEqual(200);
    })
    .then(done);
});
