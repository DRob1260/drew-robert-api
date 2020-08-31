import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', function(req, res, next) {
  res.send({
    drew: "is the best"
  });
});

export { indexRouter };
