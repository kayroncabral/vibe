import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import http from 'http'

import 'src/mongoose'

import { typeDefs, resolvers } from 'src/graphql'

export const server = new ApolloServer({ typeDefs, resolvers })

const app = express()

server.applyMiddleware({ app })

http.createServer(app).listen(process.env.PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
})
