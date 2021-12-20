const fs = require('fs')
const passport = require('passport')
const path = require('path')

// const dao = new UserDAO()

module.exports = () => {
  passport.serializeUser((id, done) => {
    done(null, id)
  })

  passport.deserializeUser(async (id, done) => {
    done(null, id)
  })

  fs.readdirSync(__dirname)
    .filter((file) => {
      const result =
        path.extname(file) === '.js' && path.basename(file) !== 'index.js'

      return result
    })
    .forEach((file) => {
      // eslint-disable-next-line import/no-dynamic-require
      const strategy = require(path.join(__dirname, file))

      strategy(passport)
    })
}
