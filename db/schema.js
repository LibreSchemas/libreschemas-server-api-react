/*  Copyright 2022 Dev Mindset Community Interest Company

    This file is part of LibreSchemas Server API for React.

    LibreSchemas Server API for React is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

    LibreSchemas Server API for React is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License along with LibreSchemas Server API for React. If not, see <https://www.gnu.org/licenses/>.
*/

import { gql } from 'apollo-server-micro'

const typeDefs = gql`

  # communication Styles
  type communication_style {
    communication_style_type: String
    communication_style_presentation: String
  }

  # conflict_types
  type conflict_types {
    conflict_type_label: String
    conflict_type_explainer: String
  }

  # Tactics
  type tactics {
    tactic_type: String
    description: String
    communication_styles: [communication_style]
    rank: Int
  }

  # challenges
  type challenges {
    description: String
    tactics: [tactics]
    conflict_types: [conflict_types]
    rank: Int
  }

  # Adjustments
  type adjustments {
    adjustment_type: String
    description: String
    rank: Int
  }

  # Behaviours
  type behaviours {
    type: String
    description: String
    rank: Int
  }

  # Events
  type Events {
    event_name: String
    event_image_url: String
    rank: Int
    behaviours_available: Boolean
    behaviours: [behaviours]
    challenges_available: Boolean
    challenges: [challenges]
    adjustments_available: Boolean
    adjustments: [adjustments]
  }

  # Schemas
  type Schemas {
    id: ID!
    name: String
    image_url: String
    category: String
    country_code: [String]
    shortuuid: String
    type: String
    events: [Events]
  }

  input SchemasInput {
    name: String!
    category: String!
  }

  # Categories
  type Categories {
    category: String
    description: String
    icon: String
    rank: Int
  }

  # Metadata
  type MetaData {
    id: ID!
    generic_categories: [Categories]
  }

  type Query {
    getSchema(id: ID!): Schemas
    getSchemas: [Schemas]
    getSchemasByCategory(categoryName: String!): [Schemas]
    getSchemasByShortUUID(shortuuid: String!): [Schemas]
    getMetaData(id: ID!): MetaData
  }

  type Mutation {
    # Schemas
    newSchema(input: SchemasInput): Schemas
    updateSchema(id: ID!, input: SchemasInput): Schemas
    deleteSchema(id: ID!): String
  }

`

module.exports = typeDefs

/****** 
* EXAMPLE GRAPH QUERIES
*
* Below are some example GraphQL queries that can be run from an app that connects to the LibraSchemas Server API.
* You can also test these queries using Apollo GraphQL on a sandbox of the API here: https://api.libreschemas.org.
* The API connects to a database instance of MongoDB with the LibreSchemas datasets loaded.
*
* Please only use this sandbox for learning. Do not use as your production environment!
********/


/*** Get a Single Schema
query GetSchema($getSchemaId: ID!) {
  getSchema(id: "XXXXXXXXXXXXXXXXX") {
    name
    id
    category
    shortuuid
    country_code
    type
    author_name
    author_location
    author_email
    author_twitter
    author_linkedin
    author_website
    version
    license
    license_terms
    events {
      behaviours_available
      behaviours {
        description
        type
      }
      challenges_available
      challenges {
        description
        conflict_types {
            conflict_type_label
            conflict_type_explainer
        }
        rank
        tactics {
          tactic_type
          description
          rank
          communication_styles {
            communication_style_type
            communication_style_presentation
          }
        }
      }
    }
  }
}

query GetSchemaByCategory($category: String!) {
  getSchemasByCategory(category: "Transport") {
    name
    id
    category
    shortuuid
    country_code
    type
    author_name
    author_location
    author_email
    author_twitter
    author_linkedin
    author_website
    version
    license
    license_terms
    events {
      behaviours {
        description
        type
      }
    }
  }
}

*** Get Multiple Schemas

query GetSchemas {
  getSchemas {
    name
    category
    country_code
    shortuuid
    type
    author_name
    author_location
    author_email
    author_twitter
    author_linkedin
    author_website
    version
    license
    license_terms
    events {
      event_name
      event_image_url
      rank
      behaviours {
        type
        description
        rank
      }
    }
  }
}

*** Get Multiple Schemas By Category
*   Note: Variable $category must be initialised. E.g. "Transport".

query Query($category: String!) {
  getSchemasByCategory(categoryName: $category) {
    name
    category
  }
}

*/
