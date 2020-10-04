import request from "supertest";
import app from "../../test/app";
import { indexRouter } from "./index";

app.use("/", indexRouter);

test("GET /covid-api", async (done) => {
  request(app)
    .get("/covid-api")
    .then((request) => {
      expect(request.status).toEqual(200);
    })
    .then(done);
});
