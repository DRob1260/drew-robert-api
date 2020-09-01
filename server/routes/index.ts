import express from "express";

const indexRouter = express.Router();

indexRouter.get("/", function (req, res) {
  res.send({
    drew: "is the best",
  });
});

export { indexRouter };
