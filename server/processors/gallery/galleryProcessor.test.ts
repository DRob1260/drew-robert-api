import { retrieveUserPhotoUrls } from "./galleryProcessor";
import { flickrPhotoDataResponse } from "../../../test/data/gallery/flickr";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { Urls } from "../../config";
import { flickrUserPhotoUrls } from "../../models/gallery/flickr/flickrUserPhotoUrls";

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

test("retrieveUserPhotoUrls", () => {
  retrieveUserPhotoUrls("MY_FAKE_USER_ID").then((urls) => {
    expect(urls).toEqual(flickrUserPhotoUrls);
  });
});
