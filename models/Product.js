const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {type: string,
required: false},
  price: { type: number, required: false },
  timeStamp: {
    seconds: { type: number, required: false },
    nanoseconds: { type: number, required: false },
  },
  category: {type: string,
required: false},
  description: {type: string,
required: false},
  discountPercent: { type: number, required: false },
  features: { type: [string], required: false },
  id: {type: {type: string,
required: false},
required: false},
  imageUrls: { type: [string], required: false },
  inStock: { type: boolean, required: false },
  quantity: { type: number, required: false },
  size: { type: [string], required: false },
  piece: { type: number, required: false },
  collection: {type: string,
required: false},
  discountPrice: { type: number, required: false },
  favclicks: { type: number, required: false },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
