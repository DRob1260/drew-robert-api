import request from "supertest";
import app from "../../../test/app";
import { galleryRouter } from "./galleryRouter";

app.use("/", galleryRouter);

test("GET /", async (done) => {
  request(app)
    .get("/")
    .then((request) => {
      expect(request.status).toEqual(200);
      expect(request.body).toEqual({
        flickr: "/flickr",
      });
    })
    .then(done);
});
