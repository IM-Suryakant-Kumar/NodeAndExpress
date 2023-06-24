const Task = require("../models/task")

const getAllTasks = async (req, res) => {
    console.log("hello 1")
	try {
		const task = await Task.find()
		res.status(200).json({ task })
	} catch (error) {
		res.status(500).json(error.message)
	}
}

const craeteTask = async (req, res) => {
	try {
		const task = await Task.create(req.body)
		res.status(201).json({ task })
	} catch (error) {
		res.status(500).json(error.message)
	}
}

const getTask = async (req, res) => {
	const task = await Task.findOne({ _id: req.params.id })
	res.json({ task })
}

const updateTask = async (req, res) => {
	const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body)
	res.json({ task })
}

const deleteTask = async (req, res) => {
	const task = await Task.findOneAndDelete({ _id: req.params.id })
	res.json({ task })
}

module.exports = {
	getAllTasks,
	craeteTask,
	getTask,
	updateTask,
	deleteTask
}
