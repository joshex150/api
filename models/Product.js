const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	name: string,
	price: number,
	timeStamp: { seconds: number, nanoseconds: number },
	category: string,
	description: string,
	discountPercent: number,
	features: [],
	id: string,
	imageUrls: [],
	inStock: boolean,
	quantity: number,
	size: [],
	piece: number,
	collection: string,
	discountPrice: number,
	favclicks: number
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;