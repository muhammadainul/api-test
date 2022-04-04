const debug = require('debug');

const jwt = require('jsonwebtoken');
const { isEmpty } = require('lodash');

module.exports = {
    is_verified: async (req, res, next) => {
        const log = debug('api-test:is_verified')
        try {
            const bearerHeader = req.headers['authorization'];
            const token = bearerHeader.split('Bearer ')[1];
            if (isEmpty(token)) return res.status(401).json({ 
                message: 'Invalid token! The access token is missing', 
                error: 'invalid_token' 
            })
            
            const decoded = jwt.verify(token, config.myConfig.sessionSecret);
            log('decoded: ', decoded);
            req.user = decoded;
            next();
        } catch (error) {
            return res.status(401).json({ message: 'Invalid token!', error })
        }
    }
};