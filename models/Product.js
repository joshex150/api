const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	name: string,
	price: number,
	timeStamp: { seconds: number, nanoseconds: number },
	category: string,
	description: string,
	discountPercent: number,
	features: [string],
	id: string,
	imageUrls: [string],
	inStock: boolean,
	quantity: number,
	size: [string],
	piece: number,
	collection: string,
	discountPrice: number,
	favclicks: number
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;