/*  Copyright 2022 Dev Mindset Community Interest Company

    This file is part of LibreSchemas Server API for React.

    LibreSchemas Server API for React is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

    LibreSchemas Server API for React is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License along with LibreSchemas Server API for React. If not, see <https://www.gnu.org/licenses/>.
*/


const Schemas = require('./models/schemas')

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
    getSchema: async (_, { id }) => {
      const schema = await Schemas.findById(id)

      if (!schema) {
        throw new Error('Schema not found')
      }

      return schema
    },
  },

}

module.exports = resolvers
