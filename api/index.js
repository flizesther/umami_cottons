const express = require('express');
const bodyParser = require('body-parser');

const app = express()

const config = {
    API_KEY: process.env.API_KEY,
    API_URL: process.env.API_URL,
    API_AUTH_URL: process.env.API_AUTH_URL,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET
}

var auth = require('./auth')(config)
var collection = require('./collection')(config)
var backup = require('./backup')(config)
var storage = require('./storage')(config)

app.use(bodyParser.json());

app.use('/auth', auth)
app.use('/collection', collection)
app.use('/backup', backup)
app.use('/storage', storage)

app.get('/health', async(req, res) => {
    res.status(200)
    res.json({ status: 200 })
})

module.exports = app