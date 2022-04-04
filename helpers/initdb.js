const { hashPassword } = require('./password');
const { Users } = require('../models');

function initDB () {
    new Promise(async (resolve, reject) => {
        console.log('Init Roles');
        try {
            const userData = await Users.findOne({});
            if (!userData) {
                await Users.create({
                    username: 'usertest',
                    password: await hashPassword('usertest')
                });
            }
            resolve(true);
        } catch (error) {
            console.log('error', error);
            reject(error);
        }
    })
}

module.exports = { initDB }