const { Recipe } = require('./recipe.model')
const { Portion } = require('../portion/portion.model')

const recipe = async (_, { id }) => {
  const result = await Recipe.findById(id).populate({
    path: 'ingredients',
    populate: {
      path: 'ingredient'
    }
  })
  return result
}

const newRecipe = async (_, { name, ingredients }) => {
  const portions = await Portion.create(ingredients)

  let recipe = await Recipe.create({ name, ingredients: portions })
  recipe = await recipe.populate('ingredients').execPopulate()
  return recipe
}

const recipes = () =>
  Recipe.find({})
    .populate('ingredients')
    .exec()

module.exports = {
  Query: {
    recipe,
    recipes
  },
  Mutation: {
    newRecipe
  }
}
