const request = require('request')

function foodClient() {
   return ()=> { const url = 'https://api.fda.gov/food/enforcement.json';
    request({url:url}, (error, response) => {
        const data = JSON.parse(response.body);
        return data
        // response.json(`data: ${data.results}`)
    })
}
}

module.exports = foodClient;
