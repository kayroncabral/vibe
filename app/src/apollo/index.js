import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = new HttpLink({ uri: process.env.REACT_APP_API })

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache()
})

export default client
