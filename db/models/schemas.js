/*  Copyright 2022 Dev Mindset Community Interest Company

    This file is part of LibreSchemas Server API for React.

    LibreSchemas Server API for React is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

    LibreSchemas Server API for React is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
*/
import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.Promise = global.Promise

const CommunicationStyleSchema = new Schema({
  communication_style_type: {
    type: String,
    required: false,
    trim: true,
  },
  communication_style_presentation: {
    type: String,
    required: false,
    trim: true,
  },
})

const ConflictTypesSchema = new Schema({
  conflict_type_label: {
    type: String,
    required: false,
    trim: true,
  },
  conflict_type_explainer: {
    type: String,
    required: false,
    trim: true,
  },
})

const TacticsSchema = new Schema({
  tactic_type: {
    type: String,
    required: false,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    trim: true,
  },
  communication_styles: {
    type: [CommunicationStyleSchema],
    required: false,
    trim: true,
  },
  rank: {
    type: Number,
    required: false,
    trim: true,
  },
})

const ChallengesSchema = new Schema({
  description: {
    type: String,
    required: true,
    trim: false,
  },
  conflict_types: {
    type: [ConflictTypesSchema],
    default: undefined,
    required: false,
  },
  tactics: {
    type: [TacticsSchema],
    required: false,
  }, 
  rank: {
    type: Number,
    required: false,
    trim: false,
  },
})

const BehavioursSchema = new Schema({
  type: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
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

const EventsSchema = new Schema({
  event_name: {
    type: String,
    required: true,
    trim: true,
  },
  event_image_url: {
    type: String,
    required: true,
    trim: true,
  },
  rank: {
    type: Number,
    required: true,
    trim: true,
  },
  behaviours_available: {
    type: Boolean,
    required: true,
  },
  behaviours: {
    type: [BehavioursSchema],
    required: true,
  },
  challenges_available: {
    type: Boolean,
    required: true,
  },
  challenges: {
    type: [ChallengesSchema],
    required: false,
  },
})

const SchemasSchema = new Schema({

  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  image_url: {
    type: String,
    required: true,
    trim: true,
  },
  country_code: [{
    type: [String],
    required: true,
  }],
  shortuuid: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    trim: true,
  },
  events: {
    type: [EventsSchema],
    required: true,
  },
  author_name: {
    type: String,
    required: true,
    trim: true,
  },
  author_email: {
    type: String,
    required: true,
    trim: true,
  },
  author_twitter: {
    type: String,
    required: true,
    trim: true,
  },
  author_linkedin: {
    type: String,
    required: true,
    trim: true,
  },
  author_website: {
    type: String,
    required: true,
    trim: true,
  },
  version: {
    type: String,
    required: true,
    trim: true,
  },
  license: {
    type: String,
    required: true,
    trim: true,
  },
  license_terms: {
    type: String,
    required: true,
    trim: true,
  },
},{
      timestamps: true
})

module.exports = mongoose.model("schemas", SchemasSchema)
