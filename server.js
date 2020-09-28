const { join } = require('path')

const express = require('express')
const morgan = require('morgan')

const passport = require('passport')

require('dotenv').config({ path: join(__dirname, 'config', 'config.env') })

const auth = require(join(__dirname, 'routes', 'auth'))

const PORT = process.env.PORT
const MODE = process.env.NODE_ENV

const app = express()

if (MODE === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())
app.use(passport.initialize())

app.use('/auth', auth)

app.get("/fail", (req, res) => res.status(401).json({ success: false }))
app.get("/", (req, res) => res.status(200).json({ success: true }))

app.listen(PORT, () => {
    console.log(`Running on port ${PORT} in ${MODE} mode`)
})