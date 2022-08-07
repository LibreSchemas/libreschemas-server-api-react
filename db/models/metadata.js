/*  Copyright 2022 Dev Mindset Community Interest Company

    This file is part of LibreSchemas Server API for React.

    LibreSchemas Server API for React is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

    LibreSchemas Server API for React is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
*/
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
