const { CustomAPIError } = require

const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({msg: err.message})
    }
    res.status(err.status).json({msg: "Something went wrong!"})
}

module.exports = errorHandlerMiddleware