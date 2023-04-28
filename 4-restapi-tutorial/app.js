const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/sample", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected with MongoDB successfully...");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const Product = new mongoose.model("Product", productSchema);

// Create Product
app.post("/api/v1/product/new", async (req, res) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

app.get("/api/v1/products", async (req, res) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
});

app.put("/api/v1/product/:id", async (req, res) => {
  let product = await Product.findById(req.params.id);

  if(!product) {
    return res.status(500).json({
      success: false,
      massage: "product does not exist..."
    })
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModfy: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

app.delete("/api/v1/product/:id", async (req, res) => {

  let product = await Product.findById(req.params.id);

  if(!product) {
    return res.status(500).json({
      success: false,
      massage: "product does not exist..."
    })
  }

  await Product.findByIdAndDelete(req.params.id)

  res.status(200).json({
    success: true,
    massage: "product is deleted successfully..."
  })

})

app.listen(4500, () => {
  console.log("server is listening on port 4500...");
});
