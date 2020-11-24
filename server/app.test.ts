import { setupServer } from "msw/node";
import { rest } from "msw";
import { Urls } from "./config";
import request from "supertest";
import app from "./app";

const server = setupServer(
  rest.get(`${Urls.drewRobertSite}`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.get(`${Urls.redcycleUi}`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.get(`${Urls.redcycleApi}`, (req, res, ctx) => {
    return res(ctx.status(200));
  })
);

it("uses indexRouter", async (done) => {
  server.listen();
  request(app)
    .get("/api")
    .then((request) => {
      expect(request.status).toEqual(200);
    })
    .then(() => {
      server.close();
      done();
    });
});
