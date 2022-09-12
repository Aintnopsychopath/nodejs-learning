const  express = require("express");

const foodRouter = require("./foodRoute");
const statusRouter = require("./status_route")

const router = express.Router();

router.use(foodRouter, statusRouter);

module.exports = router;
