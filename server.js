const { join } = require('path')
const express = require('express')
const morgan = require('morgan')

require('dotenv').config({ path: join(__dirname, 'config', 'config.env') })

const PORT = process.env.PORT
const MODE = process.env.MODE

if (MODE === 'development') {
    app.use(morgan('dev'))
}

const app = express()

app.listen(PORT, () => {
    console.log(`Running on port ${PORT} in ${MODE} mode`)
})