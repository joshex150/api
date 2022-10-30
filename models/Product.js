const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	name: String,
	price: Number,
	timeStamp: { seconds: Number, nanoseconds: Number },
	category: String,
	description: String,
	discountPercent: Number,
	features: [String],
	id: String,
	imageUrls: [String],
	inStock: Boolean,
	quantity: Number,
	size: [String],
	piece: Number,
	collection: String,
	discountPrice: Number,
	favclicks: Number
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;