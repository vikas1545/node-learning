const mongoose = require('mongoose');

const { Schema } = mongoose;

//schema
const productSchema = new Schema({
  title: { type: String, required:true },
  description: String,
  price: { type: Number, min: [0, 'price can not be in -ve'] },
  discountPercentage: { type: Number, min: [0, 'wrong min discount percentage'], max: [50, 'wrong max discount Percentage'] },
  rating: { type: Number, min: [0, 'wrong min rating'], max: [5, 'wrong max rating'] },
  stock: Number,
  brand: { type: String, required:[true,'brand name is missing'] },
  category: String,
  thumbnail: String,
  images: [String]
});

exports.Product = mongoose.model('Product', productSchema)