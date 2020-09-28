import Appointment from 'src/graphql/resolvers/Appointment'
import Mutation from 'src/graphql/resolvers/Mutation'
import Node from 'src/graphql/resolvers/Node'
import Query from 'src/graphql/resolvers/Query'
import Schedule from 'src/graphql/resolvers/Schedule'
import User from 'src/graphql/resolvers/User'

const resolvers = {
  Query,
  Mutation,
  Node,
  User,
  Schedule,
  Appointment
}

export default resolvers
