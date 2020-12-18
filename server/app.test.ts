import request from "supertest";
import app from "./app";

it("uses indexRouter", async (done) => {
  request(app)
    .get("/api")
    .then((request) => {
      expect(request.status).toEqual(200);
    })
    .then(() => {
      done();
    });
});
