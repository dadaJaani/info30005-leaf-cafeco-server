var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/user_controller.js');
var restaurant_controller = require('../controllers/restaurant_controller.js');
var reward_controller = require('../controllers/reward_controller.js');
var sale_controller = require('../controllers/sale_controller.js');


router.get('/', function (req, res) {
    res.send('Cafeco by Leaf.')
});

// ========================================================================
// Routes for USER FUNCTIONALITY
// ========================================================================
// Create user
router.post('/user', user_controller.createUser);
// Edit user
router.put('/user/:id', user_controller.editUser);
// Get all users
router.get('/findAllUsers',user_controller.findAllUsers);
// Validate a user ID
router.get('/user/checkID/:id', user_controller.validateUserID);
// Login and send user if ID and password is correct
router.post('/user/login/:id', user_controller.loginUser);
// Search a user
router.get('/searchUser/:id',user_controller.searchUser);
// Get all the rewards for the user
router.get('/user/:id/rewards', user_controller.getRewardsForUsers);
// Delete a user
router.delete('/user/:id', user_controller.deleteUser);

// ========================================================================
// Routes for RESTAURANT FUNCTIONALITY
// ========================================================================
// Create a Restaurant
router.post('/restaurant',restaurant_controller.createRestaurant);
// Edit a restaurant
router.put('/restaurant/:id',restaurant_controller.editRestaurant);
// Find all restaurants
router.get('/findAllRestaurants',restaurant_controller.findAllRestaurants);
// Search a restaurant
router.get('/searchRestaurant/:id',restaurant_controller.searchRestaurant);
// Delete a restaurant
router.delete('/restaurant/:id',restaurant_controller.deleteRestaurant);
// Validate a user ID
router.get('/restaurant/checkID/:id', restaurant_controller.validateRestaurantID);
// Login and send user if ID and password is correct
router.post('/restaurant/login/', restaurant_controller.loginRestaurant);


// ========================================================================
// Routes for REWARD FUNCTIONALITY
// ========================================================================
// Create a reward
router.post('/reward',reward_controller.createReward);
// Edit a reward
router.put('/reward/:id', reward_controller.editReward);
// Find all rewards
router.get('/findAllRewards',reward_controller.findAllRewards);
// Search a reward
router.get('/searchReward/:id',reward_controller.searchReward);
// Delete a reward
router.delete('/reward/:id',reward_controller.deleteReward);

// ========================================================================
// Routes for SALE FUNCTIONALITY
// ========================================================================
// Create a sale
router.post('/sale',sale_controller.createSale);
// Edit a sale
router.put('/sale/:id', sale_controller.editSale);
// Find all sales
router.get('/findAllSales',sale_controller.findAllSales);
// Search and get a sale
router.get('/searchSale/:id',sale_controller.searchSale);
// Delete a sale
router.delete('/sale/:id',sale_controller.deleteSale);

// Export every route as router to be used in app.js
module.exports = router;