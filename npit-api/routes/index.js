const express = require('express')
const router = express.Router()

//@desc Login/Landing page

//@route /GET
router.get('/', (req, res) => {
    try{
        res.json({
            timestamp: Date.now(),
            'status': 'success',
            'message': 'welcome to my API',
            'data': null
        });
    }catch(err){
        throw new Error(err);
    }
});

// //@route /GET /error404
// router.all('*', (req, res) => {
//     try{
//         res.status(404).json({
//             timestamp: Date.now(),
//             'status': 'error',
//             'message': 'error 404 no route found',
//             'data': null
//         });
//     }catch(err){
//         throw new Error(err);
//     }
// });

module.exports = router