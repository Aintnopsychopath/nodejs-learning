const express = require('express');
const statusRouter = express.Router();

statusRouter.get('/status', (req, res)=> {
    res.send('OK')
})

module.exports = statusRouter;