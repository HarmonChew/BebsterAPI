const Mongoose = require("mongoose");

const productSchema = new Mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    sizes: { type: Array },
    colors: { type: Array },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = Mongoose.model("Product", productSchema);
