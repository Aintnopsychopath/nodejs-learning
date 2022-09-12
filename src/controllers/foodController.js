const request = require('request')

const foodService = require('../service/foodService')

async function foodController(req, res, next) {
    res.send("food")
    try{
        const url = 'https://api.fda.gov/food/enforcement.json';
        request({url:url}, (error, response) => {
            const data = JSON.parse(response.body);
            res.json(`data: `, data.results)
        })
    } catch(err){
        console.error(`Error`, err.message);
        next(err)
    }
}
module.exports = foodController;
