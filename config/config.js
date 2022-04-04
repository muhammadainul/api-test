require('dotenv').config();

module.exports = {
    development: {
        myConfig: {
            sessionSecret: process.env.SESSION_SECRET,
            refreshSessionSecret: process.env.REFRESH_SESSION_SECRET,
            expiredSessionTime: process.env.EXPIRED_SESSION,
            expiredRefreshSessionTime: process.env.EXPIRED_SESSION_REFRESH
        }
    },
    test: {
        myConfig: {
            sessionSecret: process.env.SESSION_SECRET,
            refreshSessionSecret: process.env.REFRESH_SESSION_SECRET,
            expiredSessionTime: process.env.EXPIRED_SESSION,
            expiredRefreshSessionTime: process.env.EXPIRED_SESSION_REFRESH
        }
    },
    production: {
        myConfig: {
            sessionSecret: process.env.SESSION_SECRET,
            refreshSessionSecret: process.env.REFRESH_SESSION_SECRET,
            expiredSessionTime: process.env.EXPIRED_SESSION,
            expiredRefreshSessionTime: process.env.EXPIRED_SESSION_REFRESH
        }
    }
}   