// const Mongoose = require("mongoose");
import Mongoose from 'mongoose'
const Schema = Mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  catagory: {
    type: String,
    
  },
  size: {
    type: Array,
    
  },
  color: {
    type: Array,
  },
  rating: {
    type: String,
  },
});

const Product = Mongoose.model("products",productSchema)
export  {Product};