const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/sample", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const student = new mongoose.Schema({
  name: String,
  workout: Boolean,
  height: Number,
});

const students = new mongoose.model("student", student);

const adder = async () => {
  const ss = await students.find({height: {$gte: 6}});
  console.log(ss);
};

adder();
