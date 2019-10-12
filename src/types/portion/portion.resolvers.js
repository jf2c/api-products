const { Portion } = require('./portion.model')

const newPortion = async (_, { recipe, ingredient, size }) => {
  let portion = await Portion.create({ recipe, ingredient, size })
  portion = await portion.populate('recipe', 'ingredient').execPopulate()
  return portion
}

module.exports = {
  Mutation: { newPortion }
}
