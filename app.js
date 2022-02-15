const express = require('express')
const session = require('express-session')
const body_parser = require('body-parser')

const { login, logout, register } = require('./handlers')

require('dotenv').config()

const app = express()

app.use(body_parser.urlencoded({ extended: false }))
app.use(express.json())
app.use(
    session({
        secret: "secret",
        resave: true,
        saveUninitialized: true
    })
)

app.post('/auth/login', login)
app.post('/auth/register', register)
app.get('/auth/logout', logout)

app.listen(process.env.PORT, () => {
    console.log(`listening on http://localhost:${process.env.PORT}`)
})