var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/user_controller.js');
var restaurant_controller = require('../controllers/restaurant_controller.js');
var reward_controller = require('../controllers/reward_controller.js');
var sale_controller = require('../controllers/sale_controller.js');


router.get('/', function (req, res) {
    res.send('Cafeco by Leaf.')
});

// Routes for User functionality.
router.post('/user', user_controller.createUser);
router.put('/user/:username', user_controller.editUser);
router.get('/findAllUsers',user_controller.findAllUsers);
router.get('/searchUser/:username',user_controller.searchUser);
router.delete('/user/:username', user_controller.deleteUser);
router.get('/user/validate/:username', user_controller.validateUsername);
router.post('/user/login', user_controller.loginUser);
router.get('/user/:username/rewards', user_controller.getRewardsForUsers);

// Routes for Restaurant functionality.
router.post('/restaurant',restaurant_controller.createRestaurant);
router.put('/restaurant/:id',restaurant_controller.editRestaurant);
router.get('/findAllRestaurants',restaurant_controller.findAllRestaurants);
router.get('/searchRestaurant/:id',restaurant_controller.searchRestaurant);
router.delete('/restaurant/:id',restaurant_controller.deleteRestaurant);
router.get('/restaurant/validate/:id', restaurant_controller.validateRestaurantID);
router.post('/restaurant/login', restaurant_controller.loginRestaurant);

// Routes for Reward functionality.
router.post('/reward',reward_controller.createReward);
router.put('/reward/:id', reward_controller.editReward);
router.get('/findAllRewards',reward_controller.findAllRewards);
router.get('/searchReward/:id',reward_controller.searchReward);
router.delete('/reward/:id',reward_controller.deleteReward);

// Routes for Sale functionality.
router.post('/sale',sale_controller.createSale);
router.put('/sale/:id', sale_controller.editSale);
router.get('/findAllSales',sale_controller.findAllSales);
router.get('/searchSale/:id',sale_controller.searchSale);
router.delete('/sale/:id',sale_controller.deleteSale);

// Export every route as router to be used in app.js.
module.exports = router;