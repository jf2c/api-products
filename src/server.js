const { ApolloServer } = require('apollo-server')
const { connect } = require('./db')

const { getResolvers } = require('./loader')

module.exports.start = async () => {
  const test = await getResolvers()

  try {
    const server = new ApolloServer(test)

    await connect()
    server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`))
  } catch (error) {
    console.log(error)
  }
}

// connect()
//   .then(async connection => {
//     server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`))
//   })
//   .catch(e => console.log(e))
