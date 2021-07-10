import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    // id:{type: Number, required:true, unique:true},
    name: { type: String, required: true, unique: true },
    image: { type: Object, required: true },
    company: { type: String, required: true },
    details: { type: String, required: true },
    price: { type: Number, required: true },
  },
);
const Product = mongoose.model('Product', productSchema);

export default Product;