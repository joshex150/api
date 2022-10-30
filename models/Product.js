const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	name: { type: String, required: false },
	price: { type: Number, required: false },
	timeStamp: {
	  seconds: { type: Number, required: false },
	  nanoseconds: { type: Number, required: false },
	},
	category: { type: String, required: false },
	description: { type: String, required: false },
	discountPercent: { type: Number, required: false },
	features: { type: [String], required: false },
	id:  { type: String, required: false },
	imageUrls: { type: [String], required: false },
	inStock: { type: Boolean, required: false },
	quantity: { type: Number, required: false },
	size: { type: [String], required: false },
	piece: { type: Number, required: false },
	discountPrice: { type: Number, required: false },
	favclicks: { type: Number, required: false },
  });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;