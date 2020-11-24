const docker = process.env.DOCKER;

export const Urls = {
  drewRobertSite: docker ? "http://site:3000" : "http://localhost:3000",
  redcycleApi: docker ? "http://redcycle:8000" : "http://whatever",
};
