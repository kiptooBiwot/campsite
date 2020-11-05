const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const createError = require('http-errors')
const app = express()

const PORT = process.env.PORT || 3000

app.use(morgan())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.route('/', (req, res) => {
    res.send('HOME PAGE')
})



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})