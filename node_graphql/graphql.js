const { ApolloServer, gql } = require('apollo-server-lambda')

const typeDefs= gql`
  type Query{
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello World from GraphQL lambda!'
  }
}

const server = new ApolloServer({ typeDefs, resolvers  })

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true
  }
})
