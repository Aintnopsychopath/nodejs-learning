const data = require('../client/foodClient')

async function foodService(req, res, next) {
    try{
            res.json(`data: `, data.results)
            // console.log('data: ',data.results);
            // console.log('pagination: placeholder');
            // console.log('limit: placeholder');
            // console.log('total: placeholder');
    } catch(err){
        console.error(`Error`, err.message);
        next(err)
    }
}

module.exports = foodService;