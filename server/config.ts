const docker = process.env.DOCKER;

export const Urls = {
  drewRobertSite: docker ? "http://site:3000" : "http://localhost:3000",
  redcycleUi: docker ? "http://redcycle-ui:3000" : "http://whatever",
  redcycleApi: docker ? "http://redcycle-api:8000" : "http://whatever",
};
