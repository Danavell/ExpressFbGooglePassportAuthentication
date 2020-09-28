const { join } = require('path')

const { Router } = require('express')

const passport = require('passport')

require(join(__dirname, '..', 'controllers', 'users'))

const router = Router()

router
    .get('/auth/facebook', passport.authorize('facebook', { scope: ['email'] }))
    .get('/auth/facebook/callback',
        passport.authenticate("facebook", {
            successRedirect: "/",
            failureRedirect: "/fail"
        }))
    .get("/fail", (req, res) => res.status(401).json({ success: false }))
    .get("/", (req, res) => res.status(200).json({ success: true }))

module.exports = router