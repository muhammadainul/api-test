const express = require('express');
const router = express.Router();

const debug = require('debug');
const log = debug('api-test:');

const JobService = require('../../services/job');

const { is_verified } = require('../../middlewares/is_verified');
const { is_secured } = require('../../middlewares/is_secured');

router.get('/list', [is_verified, is_secured], async (req, res) => {
   const jobData = req.body;
   
   const result = await JobService.List(jobData);
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

router.get('/detail/:id', [is_verified, is_secured], async (req, res) => {
    const job_id = req.params.id;
    
    const result = await JobService.Detail(job_id);
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