var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller.js');


// router.post('/api',controller.createCafe);
router.get('/api', function(req, res){
    res.send({kjj:'HI'});
    // res.send(JSON.stringify(req.body));
});

router.post('/api', function(req, res){
    var etc = req.body;
    console.log(etc);

    res.send(etc);

    console.log('POSTED');
    // res.send(JSON.stringify(req.body));
});

// router.get('/api',controller.findAllCafes);
// router.get('/api/id/:id',controller.findOneCafe);
// router.get('/api/name/:name',controller.findCafeByName);


// Create new cafe
// router.post('/api',controller.createCafe);
//
// // Find all cafes
// router.get('/api',controller.findAllCafes);
//
// // Find one cafe by id
// router.get('/api/id/:id',controller.findOneCafe);
//
// //Find one cafe by name
// router.get('/api/name/:name',controller.findCafeByName);


module.exports = router;