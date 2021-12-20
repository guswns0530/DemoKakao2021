const Controller = require('../Controller')

module.exports = new (class extends Controller {
  isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
      next()
    } else {
      //   this.sendFailure(401, '로그인을 해야합니다.', res)
      next()
    }
  }

  isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
      next()
    } else {
      //   this.sendFailure(401, '이미 로그인되어 있습니다.', res)
      next()
    }
  }
})()
