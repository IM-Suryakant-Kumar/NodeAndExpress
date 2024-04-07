const fs = require("fs");

const readStream = fs.createReadStream("1-node-tutorial/input.txt")
const writeStream = fs.createWriteStream("1-node-tutorial/output.txt")

readStream.pipe(writeStream)