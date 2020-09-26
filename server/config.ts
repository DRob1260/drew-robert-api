const docker = process.env.DOCKER;

export const Urls = {
  drewRobertSite: docker ? "http://site:3000" : "http://localhost:3000",
};
