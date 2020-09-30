import { ApolloServer } from 'apollo-server-express'
import express from 'express'

import 'src/mongoose'

import { typeDefs, resolvers, schemaDirectives } from 'src/graphql'

import { authenticate } from 'src/utils/authentication'
import logger from 'src/utils/logger'

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives,
  context: async ({ req }) => ({
    request: req,
    user: await authenticate(req)
  })
})

const app = express()
server.applyMiddleware({ app })

app.listen({ port: process.env.PORT }, () =>
  logger.debug(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
