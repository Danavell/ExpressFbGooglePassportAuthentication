const { join } = require('path')
const express = require('express')

require('dotenv').config({ path: join(__dirname, 'config', 'config.env') })

const app = express()

const PORT = process.env.PORT
const MODE = process.env.MODE

app.listen(PORT, () => {
    console.log(`Running on port ${PORT} in ${MODE} mode`)
})