const KakaoStrategy = require('passport-kakao').Strategy

const config = require('../../config/config')
const { UserDAO } = require('../dao')

const dao = new UserDAO()

module.exports = (passport) => {
  const {
    development: {
      passport: {
        kakao: { clientID, clientSecret, callbackURL },
      },
    },
  } = config

  passport.use(
    'kakao',
    new KakaoStrategy(
      {
        clientID,
        clientSecret,
        callbackURL,
      },
      async (accessToken, refreshToken, profile, cb) => {
        const { id, username, provider } = profile

        const userId = id + provider

        try {
          if (!(await dao.getUser(id))) {
            await dao.insertUser(userId, '', '', provider, username)
          }
        } catch (error) {
          cb(error)
        }

        return cb(null, userId)
      },
    ),
  )
}
