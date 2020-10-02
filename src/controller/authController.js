const express = require('express');

const User = require('../model/User');

const router = express.Router();

router.post('/register', async (request, response) => {
    const { email } = request.body;
    
    try {
      if (await User.findOne({ email }))
      { return response.status(400).send({ error: "User already exist" })}

        const user = await User.create(require.body);
        User.password = undefined;

        return response.send({ user });
    } catch (error) {
        return response.status(400).send({ error: 'Registration failed' });
    }
});

module.exports = app => app.use('/auth', router);