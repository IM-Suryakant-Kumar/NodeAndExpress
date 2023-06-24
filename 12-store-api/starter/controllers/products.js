const asyncWrapper = require("../middleware/async")
const { createCustomError } = require("../error/custom-error")

const getAllProducts = async (req, res) => {
	res.status(200).send("hello")
}

module.exports = getAllProducts