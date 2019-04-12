var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller.js');


// router.post('/api',controller.createCafe);
router.get('/', function (req, res) {
    res.send('cafeco server running: by Leaf');
});

router.get('/user/checkID/:id', controller.validateUserID);

router.post('/user/login/:id', controller.loginUser);

router.post('/user', controller.createUser);

router.put('/user/:id', controller.editUser);

router.delete('/user/:id', controller.deleteUser);

router.get('/user/:id/rewards', controller.getRewardsForUsers);

// router.get('/sales/:id', controller.getSaleByID);
//
// router.get('/rewards/:id/', controller.getRewardByID);
//
//
// router.get('/restaurants/:id/sales', controller.getSaleByID);


module.exports = router;