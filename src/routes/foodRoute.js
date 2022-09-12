const express = require('express');
const foodRouter = express.Router();
const foodController = require('../controllers/foodController')
const paginatedResults = require('../middleware/pagination')
const foodClient = require('../client/foodClient')

// foodRouter.get('/status', );
foodRouter.get('/food/enforcement', paginatedResults(foodClient), foodController);

module.exports = foodRouter;
