import { rest } from "msw";
import { Urls } from "../config";

export const handlers = [
  // drew-robert-site
  rest.get(`${Urls.drewRobertSite}`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
