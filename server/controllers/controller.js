var mongoose = require('mongoose');

var restaurant = require('./restaurant_controller.js')

var User       = mongoose.model('users');
// var Restaurant = mongoose.model('restaurants');
var Sale       = mongoose.model('sales' );
var Reward     = mongoose.model('rewards' );


// =============================================
// USER FUNCTIONS
// =============================================

// FUNCTION TO CREATE USER
var createUser = function(req, res){
    var newUser = new User({
        "id":      req.body.username,
        "password": req.body.password,
        "email":    req.body.email,
        "fname":    req.body.fname,
        "lname":    req.body.lname,
        "points":   0,
        "photo":    '',
    });

    newUser.save(function (err, createdCafe)  {
        if (!err){
            res.send(createdCafe);
        }
        else {
            res.send(err);
        }
    });
};


// FUNCTION TO EDIT USER
var editUser = function(req, res){
    var userID = req.params.id;

    var newUser = {
        "id":       req.body.username,
        "password": req.body.password,
        "email":    req.body.email,
        "fname":    req.body.fname,
        "lname":    req.body.lname,
        "points":   0,
        "photo":    '',
    };

    User.updateOne({ id: userID }, newUser, function(err, updatedUser) {
        if (!err){
            res.send(updatedUser);
        }
        else {
            res.send(err);
        }
    });
};

// FUNCTION TO DELETE USER
var deleteUser = function(req, res){
    var userID = req.params.id;

    User.deleteOne({ id: userID } ,function(err){
        if (err)
            res.send(err)
    });

};

// FUNCTION TO GET CHECK IF USER ID EXISTS
var validateUserID = function (req, res){
    var userID = req.params.id;

    User.findOne({ id: userID }, function(err, theUser){
        if (theUser)
            res.send(theUser)
        else
            res.send({ username: ""})
    });
};

// FUNCTION TO CHECK PASSWORD WHEN USER SIGNS IN

// FUNCTION TO GET USER




// =============================================
// SALES FUNCTIONS
// =============================================



// =============================================
// REWARDS FUNCTIONS
// =============================================

// =============================================
// ALEKS WILL DO
// =============================================

// FUNCTION TO CREATE RESTAURANT

// FUNCTION TO EDIT RESTAURANT

// FUNCTION TO DELETE RESTAURANT

// FUNCTION TO GET CHECK IF RESTAURANT ID EXISTS

// FUNCTION TO CHECK PASSWORD WHEN RESTAURANT SIGNS IN

// FUNCTION TO GET RESTAURANT DATA

module.exports.createUser = createUser;
module.exports.deleteUser = deleteUser;
module.exports.editUser = editUser;

module.exports.createRestaurant = restaurant.createRestaurant;
module.exports.editRestaurant = restaurant.editRestaurant;
module.exports.findAllRestaurants = restaurant.findAllRestaurants;
module.exports.searchRestaurant = restaurant.searchRestaurant;
module.exports.deleteRestaurant = restaurant.deleteRestaurant;



// var Cafe = mongoose.model('cafes');
//
// var createCafe = function(req,res){
//     var cafe = new Cafe({
//         "name":req.body.name,
//         "address":req.body.address,
//         "distance":req.body.distance,
//         "rating":req.body.rating,
//         "photo":req.body.photo
//     });
//     cafe.save(function(err,newCafe){
//         if(!err){
//             res.send(newCafe);
//         }else{
//             res.sendStatus(400);
//         }
//     });
// };
//
// var findAllCafes = function(req,res){
//     Cafe.find(function(err,cafes){
//         if(!err){
//             res.send(cafes);
//         }else{
//             res.sendStatus(404);
//         }
//     });
// };
//
// var findOneCafe = function(req,res){
//     var cafeInx = req.params.id;
//     Cafe.findById(cafeInx,function(err,cafe){
//         if(!err){
//             res.send(cafe);
//         }else{
//             res.sendStatus(404);
//         }
//     });
// };
//
// var findCafeByName = function(req, res){
//     var cafeName = req.params.name;
//     Cafe.find({name:cafeName},function(err,cafe){
//         if(!err){
//             res.send(cafeName);
//         }else{
//             res.sendStatus(404);
//         }
//     });
// };
//
// module.exports.createCafe = createCafe;
// module.exports.findAllCafes = findAllCafes;
// module.exports.findOneCafe = findOneCafe;
// module.exports.findCafeByName = findCafeByName;