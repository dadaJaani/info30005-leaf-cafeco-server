var mongoose = require('mongoose');

// Import user schema.
var User = mongoose.model('users');
var Reward = mongoose.model('rewards');

// User controller.
// Defines functions which deal with input concerning users of the cafeco system.
// This includes the retrieval of rewards for users.

// Helper function to be used in other functions.
var createUserHelper = function (req) {
    var user = assembleUser(req);

    user.rewardHistory = [];
    user.savedRestaurants = [];
    user.points = 0;
    user.photo = '';

    return user;
};

var editUserHelper = function (req) {
    var user = assembleUser(req);

    user.rewardHistory = req.body.rewardHistory;
    user.savedRestaurants = req.body.savedRestaurants;
    user.points = req.body.points;
    user.photo = req.body.photo;

    return user;
};

var assembleUser = function (req) {
    var user = {
        "username":req.body.username,
        "password":req.body.password,
        "email":req.body.email,
        "fname":req.body.fname,
        "lname":req.body.lname,
    };

    return user;
};

var createUser = function(req, res){
    var newUser = new User(createUserHelper(req));

    newUser.save(function (err, createdUser){
        if (!err){
            res.send(createdUser);
        }
        else {
            console.log(err)
            res.send(err);
        }
    });
};

var editUser = function(req, res){
    var username = req.params.username;
    var userUpdate = editUserHelper(req);
    console.log('edit user');
    console.log(userUpdate);

    User.findOneAndUpdate({ username: username }, userUpdate, function(err, updatedUser) {
        if (!err){

            res.send(updatedUser);
            console.log(updatedUser)
        }
        else {
            res.send(err);
        }
    });
};

var editUserPoints = function (req, res) {
    var username = req.params.username;

    User.findOneAndUpdate({ username: username }, { points: req.body.points }, function(err, updatedUser) {
        if (!err){
            res.send(updatedUser);
        }
        else {
            res.send(err);
        }
    });
}

var editUserRewards = function (req, res) {
    var username = req.params.username;

    User.findOneAndUpdate({ username: username }, { points: req.body.points, rewardHistory: req.body.rewardHistory }, function(err, updatedUser) {
        if (!err){
            res.send(updatedUser);
        }
        else {
            res.send(err);
        }
    });
}

var editUserSavedRestaurants = function (req, res) {
    var username = req.params.username;

    User.findOneAndUpdate({ username: username }, { savedRestaurants: req.body.savedRestaurants}, function(err, updatedUser) {
        if (!err){
            res.send(updatedUser);
        }
        else {
            res.send(err);
        }
    });
}

var findAllUsers = function(req,res){

    User.find(function(err, allUsers){
        if(!err){
            res.send(allUsers);
        } else {
            res.sendStatus(404);
        }
    });
};

var searchUser = function(req, res){
    var username = req.params.username;

    User.findOne({username:username},function(err,searchedUser){
        if(!err){
            res.send(searchedUser);
        } else {
            res.send(false);
        }
    });
};

var deleteUser = function(req, res){
    var username = req.params.username;

    User.deleteOne({ username: username } ,function(err){
        if(!err){
            res.send(username);
        }else{
            res.sendStatus(404);
        }
    });

};

// Checks if the username exists.
var validateUsername = function (req, res){
    var username = req.params.username;

    User.findOne({ username: username }, function(err, theUser){
        if (theUser)
            res.send(true);
        else
            res.send(false);
    });
};

var validateUserEmail = function (req, res){
    var email = req.params.email;

    User.findOne({ email: email }, function(err, theUser){
        if (theUser)
            res.send(true);
        else
            res.send(false);
    });
};

var loginUser = function (req, res){
    var loginAttempt = {
        "username": req.body.username,
        "password": req.body.password,
    };

    User.findOne({ username: loginAttempt.username, password: loginAttempt.password }, function(err, theUser){
        if (theUser)
            res.send(theUser);
        else
            res.send(false);
    });
};

var getRewardsForUsers = function (req, res) {
    var username = req.params.username;

    Reward.find({ username: username}, function (err, rewards) {
        if (!err)
            res.send(rewards);
        else
            res.send(err);

    })
};

module.exports.createUser               = createUser;
module.exports.editUser                 = editUser;
module.exports.editUserSavedRestaurants = editUserSavedRestaurants;
module.exports.editUserPoints           = editUserPoints;
module.exports.editUserRewards          = editUserRewards;
module.exports.findAllUsers             = findAllUsers;
module.exports.searchUser               = searchUser;
module.exports.deleteUser               = deleteUser;
module.exports.validateUsername         = validateUsername;
module.exports.validateUserEmail        = validateUserEmail;
module.exports.loginUser                = loginUser;
module.exports.getRewardsForUsers       = getRewardsForUsers;
