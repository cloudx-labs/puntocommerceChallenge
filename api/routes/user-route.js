const express = require('express')
const service = require('../services/user-service')
const app = express.Router();

app.get('/', async (req, res) => {
    try {
        const response = await service.userList();
        res.json(response);
    } catch (e) {
        console.log(e)
        res.status(422).send('error')
    }
})

app.get('/email/char_count', async (req, res) => {
    try {
        const response = await service.getCharLengthFromEmail();
        res.json(response)
    } catch (e) {
        console.log(e)
        res.status(422).send('error')
    }
})

app.get('/email/duplicated', async (req, res) => {
    try {
        const response = await service.getDuplicatedEmail();
        res.json(response)
    } catch (e) {
        console.log(e)
        res.status(422).send('error')
    }
})

module.exports = app;