const express = require('express');

const User = require('../model/User');

const router = express.Router();

router.post('/register', async (request, response) => {
    try {
        const user = await User.create(require.body);

        return response.send({ user });
    } catch (error) {
        return response.status(400).send({ error: 'Registration failed' });
    }
});

module.exports = app => app.use('/auth', router);