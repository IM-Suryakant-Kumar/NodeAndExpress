const express = require("express")

const app = express()

app.use(express.static("./public"))

app.get("/about", (req, res) => {
    res.status(200).json8("About Page")
})

app.all("*", (req, res) => {
    res.status(404).send("<h1>resource not found</h1>")
})

app.listen(5000, () => console.log(`server is Listening on port 5000...`))