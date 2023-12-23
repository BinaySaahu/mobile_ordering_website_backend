const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  subtitle: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  variants_available: {
    type: Array,
    required: true,
  },
  secondary_images: {
    type: Array,
    required: true,
  },
  thumbnail_image: {
    type: String,
    required: true,
  },
});

const ProductList = new mongoose.model("Products", ProductSchema);

module.exports = ProductList;
