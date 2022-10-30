const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	
	name: {
		type: String,
		required: false
	},
	description: {
		type: String,
		required: false
	},
	size: {
		type: String,
		required: false
	},
	timestamp: {
		type: String,
		default: Date.now()
	}
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;