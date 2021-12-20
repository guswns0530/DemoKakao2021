const passport = require('passport')

const router = require('express').Router()
const { isNotLoggedIn } = require('./middlewares')

router.get('/kakao', isNotLoggedIn, passport.authenticate('kakao', {}))
router.get(
  '/kakao/callback',
  passport.authenticate('kakao', {
    successRedirect: '/',
    failureRedirect: '/',
  }),
)

router.get('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

module.exports = router
