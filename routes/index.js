const router = require('express').Router()
const authRouter = require('./auth')

router.use((req, res, next) => {
  res.contentType = 'application/json'

  next()
})

router.get('/', (req, res) => {
  const { user } = req

  if (user) {
    res.render('index.html')
  } else {
    res.render('loginPage.html')
  }
})

router.use('/auth', authRouter)

module.exports = router
