module.exports = {
  development: {
    db: {
      user: 'root',
      username: 'root',
      password: null,
      database: 'demokakao2021',
      host: 'localhost',
      dialect: 'mysql',
      omitNull: false,
      logging: false,
    },
    passport: {
      kakao: {
        clientID: 'cbc7dd85f37b273bf3e33e757a709bbd',
        clientSecret: '',
        callbackURL: 'http://localhost:3000/auth/kakao/callback',
      },
    },
    session: {
      secret: 'demokakao1234',
    },
  },
}
