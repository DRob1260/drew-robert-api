import express from "express";
import axios from "axios";

export const websiteRouter = express.Router();

console.log("websiteRouter");

websiteRouter.get("/", (req, res) => {
  axios.get("http://drew-robert-site:80").then((response) => {
    res.status(200);
    res.send(response.data);
  });
});
