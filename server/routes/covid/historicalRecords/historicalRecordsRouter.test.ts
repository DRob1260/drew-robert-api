import request from "supertest";
import app from "../../../../test/app";
import { historicalRecordsRouter } from "./historicalRecordsRouter";

app.use(historicalRecordsRouter);

test("GET /", async (done) => {
  request(app)
    .get("/")
    .then((request) => {
      expect(request.status).toEqual(200);
      expect(request.body).toEqual({
        country: "/country",
      });
    })
    .then(done);
});

test("GET /country", async (done) => {
  request(app)
    .get("/country")
    .then((request) => {
      expect(request.status).toEqual(200);
    })
    .then(done);
});
