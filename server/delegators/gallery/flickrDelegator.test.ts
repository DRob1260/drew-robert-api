import { getUserPhotoData } from "./flickrDelegator";
import { flickrPhotoDataResponse } from "../../../test/data/gallery/flickr";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { Urls } from "../../config";

export const server = setupServer(
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

it("returns the expected user photo data from the flickr API", () => {
  getUserPhotoData("MY_FAKE_USER_ID").then((userPhotoData) => {
    expect(userPhotoData).toEqual(flickrPhotoDataResponse);
  });
});
