import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.Promise = global.Promise

const CategoriesSchema = new Schema({
  category: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  icon: {
    type: String,
    required: true,
    trim: true,
  },
  rank: {
    type: Number,
    required: true,
    trim: true,
  },
})

const MetaDataSchema = new Schema({

  generic_categories: {
    type: [CategoriesSchema],
  },
  latest_version_android: {
    type: String,
    trim: true,
  },
  latest_version_ios: {
    type: String,
    trim: true,
  },
})

module.exports = mongoose.model("metadata", MetaDataSchema, "metadata")
