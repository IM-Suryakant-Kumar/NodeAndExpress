const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/subscriber", { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));



app.listen(3000, () => console.log("Server Started"));