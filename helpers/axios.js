const axios = require('axios');

module.exports = {
    Get: (postData) =>
        new Promise(async (resolve, reject) => {
            const { url = '', headers = {}, body = {} } = postData;
            console.log('Get Data', postData);
            try {
                const response = await axios.get(url, body, { headers });
                console.log('response', response.data);
                resolve(response.data);
            } catch (error) {
                console.log('error', error);
                reject(error);
            }
        })
};