const { Friend, User } = require('../models')

module.exports = class {
  async addFriend(toId, fromId) {
    try {
      return await Friend.create({
        toId,
        fromId,
      })
    } catch (error) {
      return null
    }
  }

  async getFriend(friendId) {
    try {
      return await User.find({
        include: {
          model: Friend,
          where: {
            friendId,
          },
        },
      })
    } catch (error) {
      console.log(error)
      return null
    }
  }

  async getFriendAll(userId) {
    try {
      return await Friend.findAll({
        include: {
          model: User,
        },
        where: {
          toId: userId,
        },
      })
    } catch (err) {
      return null
    }
  }
}
;(async () => {
  const dao = new module.exports()

  //   await dao.addFriend('admin1', 'admin2')

  //   console.log(await dao.getFriend(4))
  console.log((await dao.getFriendAll('admin1'))[0].dataValues)
})()
