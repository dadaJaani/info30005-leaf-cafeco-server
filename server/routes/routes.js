var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/user_controller.js');
var restaurant_controller = require('../controllers/restaurant_controller.js');
var reward_controller = require('../controllers/reward_controller.js');
var sale_controller = require('../controllers/sale_controller.js');


// router.post('/api',controller.createCafe);
router.get('/', function (req, res) {
    res.send('Hello?');
});

router.get('/user/checkID/:id', );

router.post('/user', user_controller.createUser);
router.put('/user/:id', user_controller.editUser);
router.get('/findAllUsers',user_controller.findAllUsers);
router.get('/searchUser/:id',user_controller.searchUser);
router.delete('/user/:id', user_controller.deleteUser);

router.post('/restaurant',restaurant_controller.createRestaurant);
router.put('/restaurant/:id',restaurant_controller.editRestaurant);
router.get('/findAllRestaurants',restaurant_controller.findAllRestaurants);
router.get('/searchRestaurant/:id',restaurant_controller.searchRestaurant);
router.delete('/restaurant/:id',restaurant_controller.deleteRestaurant);

router.post('/reward',reward_controller.createReward);
router.put('/reward/:id', reward_controller.editReward);
router.get('/findAllRewards',reward_controller.findAllRewards);
router.get('/searchReward/:id',reward_controller.searchReward);
router.delete('/reward/:id',reward_controller.deleteReward);

router.post('/sale',sale_controller.createSale);
router.put('/sale/:id', sale_controller.editSale);
router.get('/findAllSales',sale_controller.findAllSales);
router.get('/searchSale/:id',sale_controller.searchSale);
router.delete('/sale/:id',sale_controller.deleteSale);

module.exports = router;