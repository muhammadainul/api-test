let watch = false
let instances = 1
let exec_mode = 'fork'

module.exports = {
    apps: [
        {
            name: 'api-test',
            cwd: '/Users/ainulyaqin/Documents/api-test',
            script: 'npm run dev',
            exp_backoff_restart_delay: 100,
            instances,
            exec_mode,
            watch,
            max_memory_restart: '1G',
            autorestart: true,
            env: {
                NAMESPACE: 'Api-test',
                NODE_ENV: 'development',
                DEBUG: 'api-service:*,services:*',
                DB_CONNECTION: 'postgres',
                DB_HOST: 'localhost',
                DB_PORT: 5432,
                DB_NAME: 'test',
                DB_USERNAME: 'postgres',
                DB_PASSWORD: 'bukanuntukmainan',
                PORT: 3000,
                SESSION_SECRET: 'topSecret!',
                REFRESH_SESSION_SECRET: 'topSecret!',
                EXPIRED_SESSION: '2h',
                EXPIRED_SESSION_REFRESH: '3h'
            },
            env_production: {
                NAMESPACE: 'Api-test',
                NODE_ENV: 'production',
                DEBUG: 'api-service:*,services:*',
                DB_CONNECTION: 'postgres',
                DB_HOST: 'localhost',
                DB_PORT: 5432,
                DB_NAME: 'test',
                DB_USERNAME: 'postgres',
                DB_PASSWORD: 'bukanuntukmainan',
                PORT: 3000,
                SESSION_SECRET: 'topSecret!',
                REFRESH_SESSION_SECRET: 'topSecret!',
                EXPIRED_SESSION: '2h',
                EXPIRED_SESSION_REFRESH: '3h'
            }
        }
    ]
}