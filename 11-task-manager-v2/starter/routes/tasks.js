const express = require("express")
const router = express.Router()

const {
	getAllTasks,
	craeteTask,
	getTask,
	updateTask,
	deleteTask
} = require("../controllers/tasks")

const loader = (req, res, next) => {
	console.log("hello")
    next()
}

router.route("/").get(loader, getAllTasks).post(craeteTask)
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router
