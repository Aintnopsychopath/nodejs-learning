const { INTERNAL_SERVER } = require("../error/httpStatusCodes");

function paginatedResults(model) {
    return async (req, res) => {
        try {
                const limitValue = req.query.limit;
                const skipValue = req.query.skip
                result = await model.find().limit(limitValue).skip(skipValue);
                res.status(200).send(result)
            } catch (e) {
                res.status(INTERNAL_SERVER).json({message: e.message})
                }   

    //      const limit = parseInt(req.query.limit);

    //      const startIndex = (page - 1) * limit;
    //      const endIndex = page * limit;

    //      const results = {};

    //      if (endIndex < model.length) {
    //         results.next = {
    //             page: page + 1,
    //             limit: limit
    //         };
    //      };

    //      if (startIndex > 0) {
    //         results.previous = {
    //             page: page - 1,
    //             limit: limit
    //         };
    //      };
    //      try {
    //         results.results = await model.find().limit(limit).skip(startIndex).exec;
    //         res.paginatedResults = results;
    //         next();
    //      } catch (e) {
    //         res.status(INTERNAL_SERVER).json({message: e.message})
    //      }
    // }
    }
}

module.exports = paginatedResults;
