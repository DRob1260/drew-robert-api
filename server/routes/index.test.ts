import { setupServer } from "msw/node";
import { rest } from "msw";
import { Urls } from "../config";
import request from "supertest";
import app from "../../test/app";
import { indexRouter } from "./index";

const server = setupServer(
  rest.get(`${Urls.drewRobertSite}`, (req, res, ctx) => {
    return res(ctx.status(200));
  })
);

app.use("/", indexRouter);

test("GET /", async (done) => {
  server.listen();
  request(app)
    .get("/")
    .then((request) => {
      expect(request.status).toEqual(200);
    })
    .then(() => {
      server.close();
      done();
    });
});

test("GET /covid", async (done) => {
  request(app)
    .get("/covid-api")
    .then((request) => {
      expect(request.status).toEqual(200);
    })
    .then(done);
});
