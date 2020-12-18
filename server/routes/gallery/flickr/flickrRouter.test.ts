import request from "supertest";
import app from "../../../../test/app";
import { flickrRouter } from "./flickrRouter";
import { flickrUserPhotoUrls } from "../../../models/gallery/flickr/flickrUserPhotoUrls";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { Urls } from "../../../config";
import { flickrPhotoDataResponse } from "../../../../test/data/gallery/flickr";

const server = setupServer(
  rest.get(`${Urls.flickrApi}/`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(flickrPhotoDataResponse));
  })
);
beforeAll(() => {
  server.listen();
});
beforeEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});

app.use("/", flickrRouter);

test("GET /", async (done) => {
  request(app)
    .get("/")
    .then((request) => {
      expect(request.status).toEqual(200);
      expect(request.body).toEqual({
        userPhotos: "/users/:userId/photos",
      });
    })
    .then(done);
});

test("GET /users/:userId/photos", async (done) => {
  request(app)
    .get("/users/MY_FAKE_USER_ID/photos")
    .then((request) => {
      expect(request.status).toEqual(200);
      expect(request.body).toEqual(flickrUserPhotoUrls);
    })
    .then(done);
});
