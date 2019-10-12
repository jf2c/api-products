const { ApolloServer } = require('apollo-server')
const { loadTypeSchema } = require('./utils/schema')
const merge = require('lodash.merge')
const { connect } = require('./db')
const ingredient = require('./types/ingredient/ingredient.resolvers')
const recipe = require('./types/recipe/recipe.resolvers')
const portion = require('./types/portion/portion.resolvers')

const types = ['ingredient', 'recipe', 'portion']

module.exports.start = async () => {
  const rootSchema = `
    schema {
      query: Query
      mutation: Mutation
    }
  `

  const schemaTypes = await Promise.all(types.map(loadTypeSchema))

  try {
    const server = new ApolloServer({
      typeDefs: [rootSchema, ...schemaTypes],
      resolvers: merge({}, ingredient, recipe, portion)
    })

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
