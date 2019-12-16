const mongoose = require('mongoose')
const IngredientModel = require('../ingredient.model')

const ingredientData = {
  name: 'egg',
  recipes: []
}

describe('Ingredient', () => {
  beforeAll(async () => {
    await mongoose.connect(
      global.__MONGO_URI__,
      { useNewUrlParser: true, useCreateIndex: true },
      err => {
        if (err) {
          console.error(err)
          process.exit(1)
        }
      }
    )
  })

  it('create & save ingredient successfully', async () => {
    const ingredient = new IngredientModel(ingredientData)
    const savedIngredient = await ingredient.save()

    expect(savedIngredient._id).toBeDefined()
    expect(savedIngredient.name).toBe(ingredientData.name)
  })
})
