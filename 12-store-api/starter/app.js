const express = require("express")
const dotenv = require("dotenv")
const app = express()
dotenv.config()

const connectDB = require("./db/connect")

const productsRouter = require("./routes/products")
const notFound = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

// middleware
app.use(express.json())
app.use("/api/v1/products", productsRouter)
app.use(notFound)
app.use(errorHandlerMiddleware)

app.get("/", async (req, res) => {
    res.send("<h1>Home Route</h1>")
})

const port = process.env.PORT || 4000
const start = async () => {
	try {
        await connectDB(process.env.MONGO_URI)
		app.listen(port, console.log(`Server is listening on port ${port}...`))
	} catch (error) {
		console.log(error)
	}
}
start()
