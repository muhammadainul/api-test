const debug = require('debug');
const log = debug('api-test:services:');;

const { toInteger, isEmpty } = require('lodash');
const { Get } = require('../helpers/axios');

async function List (jobData) {
    const {
        description = '',
        location = '',
        full_time = true,
        page = ''
    } = jobData;
    log('[API Test] List Job', jobData);
    try {
        let url;
        if (page !== '') {
            url = `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?page=${toInteger(page)}`;
        } else {
            url = `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?`;
            if (description !== '') {
                let searchByDesc = `description=${description}&`;
                url = url + searchByDesc;
            }

            if (location !== '') {
                let searchByLoc = `location=${location}&`;
                url = url + searchByLoc;
            }

            if (full_time !== '') {
                let searchByFulltime = `full_time=${full_time}`;
                url = url + searchByFulltime;
            }
        }

        const data = await Get({ 
            url, 
            body: {}, 
            headers: {}
        });

        return data;
    } catch (error) {
        return error;
    }
}

async function Detail (job_id) {
    log('[API Test] Detail Job', job_id);
    try {
        if (!job_id) throw { error: 'Job ID required.' };

        const data = await Get({
            url: `http://dev3.dansmultipro.co.id/api/recruitment/positions/${job_id}`,
            body: {},
            headers: {}
        });

        if (isEmpty(data)) throw { error: 'Data not found.' };

        return data;
    } catch (error) {
        return error;
    }
}

module.exports = {
    List,
    Detail
}