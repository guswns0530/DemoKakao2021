const express = require('express')
const morgan = require('morgan')
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session)
const path = require('path')
const passport = require('passport')
const nunjucks = require('nunjucks')

const config = require('./config/config')
const passportConfig = require('./interface/passport')
const { sequelize } = require('./interface/models')

const indexRouter = require('./routes')

const app = express()
passportConfig()

app.set('port', 3000)
app.set('view engine', 'html')
nunjucks.configure('views', {
  express: app,
  watch: true,
})
app.set('config', config)

const sessionStore = new MySQLStore(config.development.db)
const sessionMiddleware = session({
  secret: config.development.session.secret,
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
})

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/image', express.static(path.join(__dirname, 'image')))
app.use(sessionMiddleware)
app.use(passport.initialize())
app.use(passport.session())

app.use('/', indexRouter)

// sequelize
//   .sync({ force: false })
//   .then(async () => {
//     console.log('DB Connect')
//   })
//   .catch((err) => {
//     console.log(err)
//   })

const server = app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번으로 실행중')
})

;(async () => {
  const db = require('./interface/models')

  console.log('----------------DB TEST------------------')

  const result = await db.Room.findAll({
    include: [
      {
        model: db.JoinUser,
        where: {
          user_id: 'admin',
        },
      },
    ],
  })

  const result2 = await db.JoinUser.findAll({
    include: [
      {
        model: db.Room,
      },
    ],
    where: {
      user_id: 'admin',
    },
  })

  // console.log(result2[0].dataValues)

  // console.log(await db.Chat.findAll({}))
  // console.log(await db.JoinUser.findAll({}))
})()
