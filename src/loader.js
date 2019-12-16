const fs = require('fs')
const path = require('path')

const merge = require('lodash.merge')
const { loadTypeSchema } = require('./utils/schema')

const directoryPath = path.join(process.cwd(), 'src/types/')

const rootSchema = `
  schema {
    query: Query
    mutation: Mutation
  }
`

module.exports.getResolvers = () =>
  new Promise((resolve, reject) => {
    fs.readdir(directoryPath, { encoding: 'utf-8' }, async (err, types) => {
      if (err) {
        reject(err)
      }

      const onlyTypes = types.filter(type => !/^\.(.+)$/g.test(type))

      const schemaTypes = await Promise.all(onlyTypes.map(loadTypeSchema))

      const obj = onlyTypes.map(type =>
        require(`./types/${type}/${type}.resolvers.js`)
      )

      const resp = {
        typeDefs: [rootSchema, ...schemaTypes],
        resolvers: merge({}, ...obj)
      }

      resolve(resp)
    })
  })
