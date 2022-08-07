/*  Copyright 2022 Dev Mindset Community Interest Company

    This file is part of LibreSchemas Server API for React.

    LibreSchemas Server API for React is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

    LibreSchemas Server API for React is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License along with LibreSchemas Server API for React. If not, see <https://www.gnu.org/licenses/>.
*/

const Schemas = require('./models/schemas')
const MetaData = require('./models/metadata')

const resolvers = {
  Query: {
    // schemas
    getSchemas: async () => {
      try {
        const schemas = await Schemas.find({})

        return schemas
      } catch (err) {
        console.log(err)
      }
    },
    getSchemasByCategory: async (_, { categoryName } ) => {
      try {
        const schemas = await Schemas.find( { category: categoryName } ).exec();

        return schemas
      } catch (err) {
        console.log(err)
      }
    },
    getSchemasByShortUUID: async (_, { shortuuid } ) => {
      try {
        const schemas = await Schemas.find( { shortuuid: shortuuid } ).exec();

        return schemas
      } catch (err) {
        console.log(err)
      }
    },
    getSchema: async (_, { id }) => {
      const schema = await Schemas.findById(id)

      if (!schema) {
        throw new Error('Schema not found')
      }

      return schema
    },
    // metadata
    getMetaData: async (_, { id }) => {
        const metadata = await MetaData.findById(id)
        if (!metadata) {
          throw new Error('Metadata not found')
        }
        return metadata

    },
  },

  Mutation: {
    newSchema: async (_, { input }) => {
      try {
        const schema = new Schemas(input)

        const result = await schema.save()

        return result
      } catch (err) {
        console.log(err)
      }
    },
    updateSchema: async (_, { id, input }) => {
      let schema = await Schemas.findById(id)

      if (!schema) {
        throw new Error('Schema not found')
      }

      schema = await Schemas.findOneAndUpdate({ _id: id }, input, {
        new: true,
      })

      return product
    },
    deleteSchema: async (_, { id }) => {
      const schema = await Schemas.findById(id)

      if (!schema) {
        throw new Error('Schema not found')
      }

      await schema.findOneAndDelete({ _id: id })

      return 'Schema deleted'
    },
  },
}

module.exports = resolvers
