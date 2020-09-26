import { ApolloServer } from 'apollo-server'

import { typeDefs, resolvers } from 'src/graphql'

export const server = new ApolloServer({ typeDefs, resolvers })

server.listen(process.env.PORT).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
