import { ApolloServer } from 'apollo-server'

import 'src/mongoose'

import { typeDefs, resolvers } from 'src/graphql'

export const server = new ApolloServer({ typeDefs, resolvers })

server.listen(process.env.PORT).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
