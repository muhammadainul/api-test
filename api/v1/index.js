const express = require('express');
const router = express.Router();

const debug = require('debug');
const log = debug('api-test:');

const UserService = require('../../services/user');

// login
router.post('/login', async (req, res) => {
   const userData = req.body;
   
   const result = await UserService.SignIn(userData);
   log('result', result);

    if (result.error) {
        return res.status(400).json({ 
            status: 400, 
            error: result.error 
        });
    } else {
        return res.status(200).json({
            status: 200, 
            data: result
        });
    }
});

module.exports = router;