var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller.js');


// router.post('/api',controller.createCafe);
router.get('/', function (req, res) {
    res.send('Hello?');
});

router.get('/user/checkID/:id', );

router.post('/user', controller.createUser);
router.put('/user/:id', controller.editUser);
router.delete('/user/:id', controller.deleteUser);

router.post('/restaurant',controller.createRestaurant);
router.put('/restaurant/:id',controller.editRestaurant);
router.get('/findAllRestaurants',controller.findAllRestaurants);
router.get('/searchRestaurant/:id',controller.searchRestaurant);
router.delete('/restaurant/:id',controller.deleteRestaurant);






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