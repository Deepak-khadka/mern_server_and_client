import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  is_parent: {
    type: Boolean,
    required: true,
    default: false,
  },
  created_at: {
    type: Date,
    required: false,
    default: Date.toLocaleString(),
  },
});

const CategoryModel = mongoose.model("category", CategorySchema);
export default CategoryModel;
