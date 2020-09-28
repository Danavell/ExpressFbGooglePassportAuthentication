const { join } = require('path')
const express = require('express')
const morgan = require('morgan')

const passport = require('passport')

require('dotenv').config({ path: join(__dirname, 'config', 'config.env') })

const fbAuthRouter = require(join(__dirname, 'routes', 'facebookAuth'))
const googleAuthRouter = require(join(__dirname, 'routes', 'googleAuth'))

const PORT = process.env.PORT
const MODE = process.env.NODE_ENV

const app = express()

if (MODE === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())
app.use(passport.initialize())

app.use('/auth/facebook', fbAuthRouter)
app.use('/auth/google', googleAuthRouter)
app.get("/fail", (req, res) => res.status(401).json({ success: false }))
app.get("/", (req, res) => res.status(200).json({ success: true }))
app.listen(PORT, () => {
    console.log(`Running on port ${PORT} in ${MODE} mode`)
})