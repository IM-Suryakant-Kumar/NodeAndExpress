// // Read Stream
// const fs = require("fs");

// let content = "";

// const readStream = fs.createReadStream("1-node-tutorial/1-intro.js")

// readStream.on("data", function(chunk) {
//   content += chunk
// })

// readStream.on("end", function() {
//   console.log(content)
// })

// readStream.on("error", function(err) {
//   console.log(err.stack)
// })

// // Write Stream
// const fs = require("fs");

// let data = "I love CodingClench";

// const writeStream = fs.createWriteStream("output.txt");

// writeStream.write(data, "utf-8")

// writeStream.end()

// writeStream.on("finish", function() {
//   console.log("Writting completed")
// })
