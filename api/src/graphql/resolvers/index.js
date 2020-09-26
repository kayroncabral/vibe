import Mutation from 'src/graphql/resolvers/Mutation'
import Node from 'src/graphql/resolvers/Node'
import Query from 'src/graphql/resolvers/Query'
import User from 'src/graphql/resolvers/User'

const resolvers = {
  Query,
  Mutation,
  Node,
  User
}

export default resolvers
