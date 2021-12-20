const { authController } = require('../../interface/controllers')

exports.isLoggedIn = authController.isLoggedIn
exports.isNotLoggedIn = authController.isNotLoggedIn
