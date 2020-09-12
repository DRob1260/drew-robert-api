const environment = process.env.NODE_ENV;

export const Urls = {
  drewRobertApi:
    environment === "production"
      ? "https://shielded-spire-10992.herokuapp.com"
      : "http://localhost:8080",
};
