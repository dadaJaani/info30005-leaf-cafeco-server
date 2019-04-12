var mongoose = require('mongoose');
var Users = mongoose.model('users');

// ToDo: Function to check password when user signs in.

// =============================================
// USER FUNCTIONS
// =============================================

// FUNCTION TO CREATE USER
var createUser = function(req, res){
    var newUser = new Users(assembleUser(req));

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

var assembleUser = function (req) {
    var user = {
        "id":req.body.id,
        "password":req.body.password,
        "email":req.body.email,
        "fname":req.body.fname,
        "lname":req.body.lname,
        "points":req.body.points,
        "photo":req.body.photo,
    };

    return user;
};

// FUNCTION TO EDIT USER
var editUser = function(req, res){
    var userId = req.params.id;
    var userUpdate = assembleUser(req);

    Users.updateOne({ id: userId }, userUpdate, function(err, updatedUser) {
        if (!err){
            res.send(updatedUser);
        }
        else {
            res.send(err);
        }
    });
};

var findAllUsers = function(req,res){
    Users.find(function(err,allUsers){
        if(!err){
            res.send(allUsers);
        }else{
            res.sendStatus(404);
        }
    });
};

var searchUser = function(req, res){
    var userId = req.params.id;
    Users.find({id:userId},function(err,searchedUser){
        if(!err){
            res.send(searchedUser);
        }else{
            res.sendStatus(404);
        }
    });
};

// FUNCTION TO DELETE USER
var deleteUser = function(req, res){
    var userId = req.params.id;

    Users.deleteOne({ id: userId } ,function(err){
        if(!err){
            res.send(userId);
        }else{
            res.sendStatus(404);
        }
    });

};

module.exports.createUser = createUser;
module.exports.editUser = editUser;
module.exports.findAllUsers = findAllUsers;
module.exports.searchUser = searchUser;
module.exports.deleteUser = deleteUser;
