const { connect } = require('./db')

module.exports.start = async () => {
  try {
    await connect()
  } catch (error) {
    console.log(error)
  }
}
