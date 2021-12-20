const { User } = require('../models')

module.exports = class {
  async getUser(userId) {
    try {
      const result = await User.findOne({
        where: {
          userId,
        },
      })
      return result.dataValues
    } catch (error) {
      return null
    }
  }

  async insertUser(userId, password, email, provider, name) {
    try {
      const result = await User.create({
        userId,
        password,
        email,
        provider,
        name,
      })

      return result.dataValues
    } catch (error) {
      return null
    }
  }
}
