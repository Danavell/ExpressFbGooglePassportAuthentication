const { join } = require('path')
const express = require('express')
const morgan = require('morgan')

const passport = require('passport')

require('dotenv').config({ path: join(__dirname, 'config', 'config.env') })

const authRouter = require(join(__dirname, 'routes', 'auth'))

const PORT = process.env.PORT
const MODE = process.env.NODE_ENV

const app = express()

if (MODE === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())
app.use(passport.initialize())

app.use('/', authRouter)

app.listen(PORT, () => {
    console.log(`Running on port ${PORT} in ${MODE} mode`)
})