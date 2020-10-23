const express = require('express');
const bodyParser = require('body-parser');

const app = express()

const config = {
    API_KEY: process.env.API_KEY,
    API_URL: process.env.API_URL,
    API_AUTH_URL: process.env.API_AUTH_URL
}

var auth = require('./auth')(config)
var collection = require('./collection')(config)
var backup = require('./backup')(config)

app.use(bodyParser.json());

app.use('/auth', auth)
app.use('/collection', collection)
app.use('/backup', backup)

export default {
    path: '/api',
    handler: app
}