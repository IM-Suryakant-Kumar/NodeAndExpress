const express = require("express")
const app = express()

app.use(express.json())

const posts = [
	{
		username: "Kyle",
		title: "Post 1"
	},
	{
		username: "Jin",
		title: "Post 2"
	}
]

app.get("/posts", (req, res) => {
	res.status(200).json(posts)
})

app.get("/login", (req, res) => {
    // Authentication user
})

app.listen(3000, console.log("lisening on port 3000"))
