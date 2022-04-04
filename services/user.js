const debug = require('debug');
const log = debug('api-test:services:');

const moment = require('moment');
const jwt = require('jsonwebtoken');

const { Users } = require('../models');

const { verifyPassword } = require('../helpers/password');

async function SignIn (userData) {
    const { username, password } = userData;
    log('[API Test] SignIn', userData);
    try {
        if (!username || !password) throw { error: 'Username and password required.' };

        const data = await Users.findOne({ 
            where: { username },
            raw: true
        })
        if (!data) throw { error: 'Username not found.' };

        const checkPassword = await verifyPassword(
            password,
            data.password
        );
        if (!checkPassword) throw { error: 'Password does not match.' };

        const access_token = jwt.sign({ 
            id: data.id,
            }, config.myConfig.sessionSecret, 
            { expiresIn: config.myConfig.expiredSessionTime 
        });
        const refresh_token = jwt.sign({ 
            id: data.id, 
            }, config.myConfig.refreshSessionSecret, 
            { expiresIn: config.myConfig.expiredRefreshSessionTime 
        });

        await Users.update({
            last_login: moment().format()
        },
        { where: { id: data.id } }
        );
       
        return {
            message: 'Login success.',
            user: await Users.findOne({
                where: { id: data.id },
                raw: true
            }),
            session: {
                access_token,
                refresh_token
            }
        }
    } catch (error) {
        return error;
    }
}

module.exports = {
    SignIn
}