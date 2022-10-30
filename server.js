const express = require("express");
const dotenv = require("dotenv");
const mongo_db = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

mongo_db.connect(process.env.MONGODB_URL, { useNewUrlParser: true }, () => {
  console.log("Connected to DB Josh");
});

// Models
const Product = require("./models/Product");

app.get("/products", async (req, res) => {
  const products = await Product.find();

  res.json(products);
});

app.post("/product/new", (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    size: req.body.size,
    imageUrls: req.body.imageUrls,
    price: req.body.price,
    timeStamp: req.body.timeStamp,
    category: req.body.category,
    discountPercent: req.body.discountPercent,
    features: req.body.features,
    id: req.body.id,
    inStock: req.body.inStock,
    quantity: req.body.quantity,
    piece: req.body.piece,
    // collection: req.body.collection,
    discountPrice: req.body.discountPrice,
    favclicks: req.body.favclicks,
  });

  product.save();

  res.json(product);
});

app.delete("/product/delete/:name", async (req, res) => {
  const result = await Product.findByIdAndDelete(req.params.name);

  res.json({ result });
  console.log(result);
});

app.put("/product/update/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  product.text = req.body.text;

  product.save();

  res.json(product);
});

app.listen(process.env.PORT || 3001);
