const { join } = require('path')

const { Router } = require('express')

const passport = require('passport')

require(join(__dirname, '..', 'controllers', 'facebookAuth'))
require(join(__dirname, '..', 'controllers', 'googleAuth'))

const router = Router()

router
    .get('/facebook', passport.authenticate('facebook', { scope: ['email'] }))
    .get('/facebook/callback',
        passport.authenticate("facebook", {
            successRedirect: "/",
            failureRedirect: "/fail"
        }))
    .get('/google/', passport.authenticate('google', { scope: ['email'] }))
    .get('/google/callback',
        passport.authenticate('google', {
            successRedirect: "/",
            failureRedirect: "/fail"
        }))

module.exports = router