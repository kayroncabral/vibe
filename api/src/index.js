import { ApolloServer } from 'apollo-server'

import 'src/mongoose'
import { typeDefs, resolvers } from 'src/graphql'

import logger from 'src/utils/logger'

export const server = new ApolloServer({ typeDefs, resolvers })

server.listen(process.env.PORT).then(({ url }) => {
  logger.debug(`🚀  Server ready at ${url}`)
})
