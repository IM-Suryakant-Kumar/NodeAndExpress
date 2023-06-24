const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const app = express()
const tasks = require("./routes/tasks")
const connectDB = require("./db/connect")

// middleware
app.use(express.static("./public"))
app.use(express.json())
app.use("/api/v1/tasks", tasks)

// routes
app.get("/hello", (req, res) => {
	res.send("Task Manager")
})

const port = process.env.PORT || 3000

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI)
		app.listen(port, console.log("Server is litening on port 3000..."))
	} catch (error) {
		console.log(error)
	}
}

start()
