import { ApolloServer } from 'apollo-server'

import 'src/mongoose'

import { typeDefs, resolvers } from 'src/graphql'

import { authenticate } from 'src/utils/authentication'
import logger from 'src/utils/logger'

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    request: req,
    user: await authenticate(req)
  })
})

server.listen(process.env.PORT).then(({ url }) => {
  logger.debug(`🚀 Server ready at ${url}`)
})
