var mongoose = require('mongoose');

// Import rewards schema.
var Rewards = mongoose.model('rewards');

// Reward controller.
// Defines functions which deal with rewards by restaurants.

var assembleReward = function (req) {
    var reward = {
        "id":req.body.id,
        "username":req.body.username,
        "restaurantID":req.body.restaurantID,
        "points":req.body.points,
        "date":req.body.date,
        "type":req.body.type,
    };

    return reward;
};

var createReward = function(req,res){
    var newReward = Rewards(assembleReward(req));

    // console.log(newReward);

    newReward.save(function(err,savedReward){
        if(!err){
            res.send(savedReward);
        }else{
            // console.log(err);
            res.sendStatus(400);
        }
    });
};


var editReward = function(req,res){
    var rewardId = req.params.id;
    var rewardUpdate = assembleReward(req);

    // console.log(rewardUpdate);

    Rewards.updateOne({id:rewardId}, rewardUpdate, function(err,updatedReward){
        if(!err){
            res.send(updatedReward);
        }else{
            // console.log(err);
            res.sendStatus(400);
        }
    });
};

var findAllRewards = function(req,res){
    Rewards.find(function(err,allRewards){
        if(!err){
            res.send(allRewards);
        }else{
            res.sendStatus(404);
        }
    });
};

var searchReward = function(req, res){
    var rewardId = req.params.id;
    Rewards.find({id:rewardId},function(err,searchedReward){
        if(!err){
            res.send(searchedReward);
        }else{
            res.sendStatus(404);
        }
    });
};

var getRewardsForUser = function(req, res){
    var username = req.params.username;

    Rewards.find({username:username},function(err,searchedReward){
        if(!err){
            res.send(searchedReward);
        }else{
            res.send(false);
        }
    });
};

var deleteReward = function(req, res){
    var rewardId = req.params.id;
    Rewards.deleteOne({id:rewardId},function(err){
        if(!err){
            res.send(rewardId);
        }else{
            res.sendStatus(404);
        }
    });
};

module.exports.createReward      = createReward;
module.exports.editReward        = editReward;
module.exports.findAllRewards    = findAllRewards;
module.exports.searchReward      = searchReward;
module.exports.getRewardsForUser = getRewardsForUser
module.exports.deleteReward      = deleteReward;
