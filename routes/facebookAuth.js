const { join } = require('path')

const { Router } = require('express')

const passport = require('passport')

require(join(__dirname, '..', 'controllers', 'facebookAuth'))
require(join(__dirname, '..', 'controllers', 'googleAuth'))

const router = Router()

router
    .get('/', passport.authenticate('facebook', { scope: ['email'] }))
    .get('/callback',
        passport.authenticate("facebook", {
            successRedirect: "/",
            failureRedirect: "/fail"
        }))
module.exports = router