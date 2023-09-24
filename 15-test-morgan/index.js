import express from "express"
import morgan from "morgan"

const app = express()
morgan.token("host", (req, res) => {
    return req.hostname
})
app.use(morgan(':method :host :status :res[content-length] - :response-time ms'))
app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>")
})
app.listen(3000, () => console.log("Listening on port 3000..."))