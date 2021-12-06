const express = require('express')
const morgan = require('morgan')
const { exit } = require('process')
// const session = require('express-session')
const path = require('path')

const config = require('./config/config')
const { sequelize } = require('./Api_Interface/models')

const app = express()

app.set('port', 3000)
app.set('config', config)

// const sessionStore = new MySQLStore()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

sequelize
  .sync({ force: false })
  .then(async () => {
    console.log('데이터베이스 연결 성공')
  })
  .catch((err) => {
    console.log(err)
    exit(err)
  })

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번으로 실행중')
})
