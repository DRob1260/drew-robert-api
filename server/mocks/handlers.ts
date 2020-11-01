import { rest } from "msw";
import { Urls } from "../config";

export const handlers = [
  rest.get(`${Urls.drewRobertSite}`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.get(`${Urls.redcycleApi}`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.get(`${Urls.redcycleUi}`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
