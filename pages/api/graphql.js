/*  Copyright 2022 Dev Mindset Community Interest Company

    This file is part of LibreSchemas Server API for React.

    LibreSchemas Server API for React is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

    LibreSchemas Server API for React is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License along with LibreSchemas Server API for React. If not, see <https://www.gnu.org/licenses/>.
*/
import { ApolloServer, gql } from 'apollo-server-micro'
import typeDefs from '../../db/schema'
import resolvers from '../../db/resolvers'
import connectDb from '../../db/config'
import('next').NextConfig

const { 
  ApolloServerPluginLandingPageLocalDefault,
} = require('apollo-server-core');

connectDb();

const apolloServer = new ApolloServer({ typeDefs, resolvers, introspection: true, plugins: [ ApolloServerPluginLandingPageLocalDefault({ footer: false }) ] })

const startServer = apolloServer.start()

const handler = async (req, res) => {

  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}

export default handler;
