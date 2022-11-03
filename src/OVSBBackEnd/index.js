const express = require('express')
const app = express()
const db = require('./config/db')
const consign = require('consign')

console.log('backend 1')

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

console.log('backend 2')

app.db = db

console.log('backend 3')

app.listen(3000, () => {
    console.log('backend executando...')
})