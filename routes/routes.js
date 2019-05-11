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
router.put('/user/:username/password', user_controller.changePassword);
router.put('/user/:username/rewards', user_controller.editUserRewards);
router.put('/user/:username/points', user_controller.editUserPoints);
router.put('/user/:username/savedRestaurants', user_controller.editUserSavedRestaurants);
router.get('/user',user_controller.findAllUsers);
router.get('/user/:username',user_controller.searchUser);
router.delete('/user/:username', user_controller.deleteUser);
router.get('/user/validate/:username', user_controller.validateUsername);
router.get('/user/validateemail/:email', user_controller.validateUserEmail);
router.post('/user/login', user_controller.loginUser);
router.get('/user/:username/rewards', user_controller.getRewardsForUsers);

// Routes for Restaurant functionality.
router.post('/restaurant',restaurant_controller.createRestaurant);
router.put('/restaurant/:id/review',restaurant_controller.createReview);
router.put('/restaurant/:id',restaurant_controller.editRestaurant);
router.get('/restaurant',restaurant_controller.findAllRestaurants);
router.get('/restaurant/:id',restaurant_controller.searchRestaurant);
router.delete('/restaurant/:id',restaurant_controller.deleteRestaurant);
router.get('/restaurant/validate/:id', restaurant_controller.validateRestaurantID);
router.get('/restaurant/validateemail/:email', restaurant_controller.validateRestaurantEmail);
router.post('/restaurant/login', restaurant_controller.loginRestaurant);

// Routes for Reward functionality.
router.post('/reward',reward_controller.createReward);
router.put('/reward/:id', reward_controller.editReward);
router.get('/user/:username/rewards',reward_controller.getRewardsForUser);
router.get('/reward',reward_controller.findAllRewards);
router.get('/reward/:id',reward_controller.searchReward);
router.delete('/reward/:id',reward_controller.deleteReward);

// Routes for Sale functionality.
router.post('/sale',sale_controller.createSale);
router.put('/sale/:id', sale_controller.editSale);
router.get('/sale/validate/:id', sale_controller.validateSaleID);
router.get('/sale',sale_controller.findAllSales);
router.get('/sale/:id',sale_controller.getSale);
router.delete('/sale/:id',sale_controller.deleteSale);

// Export every route as router to be used in app.js.
module.exports = router;