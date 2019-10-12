const { Ingredient } = require('./ingredient.model')

const ingredient = (_, args) => Ingredient.findById(args.id)

const newIngredient = (_, args) => Ingredient.create({ name: args.name })

const ingredients = () => Ingredient.find({})

const updateIngredient = (_, args) =>
  Ingredient.findByIdAndUpdate(args.id, { name: args.name }, { new: true })

const removeIngredient = (_, args) => Ingredient.findByIdAndRemove(args.id)

module.exports = {
  Query: {
    ingredient,
    ingredients
  },
  Mutation: {
    newIngredient,
    updateIngredient,
    removeIngredient
  }
}
