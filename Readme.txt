Version to look for is tagged: Assignment2Deliverable.

Git repository: https://github.com/dadaJaani/info30005-leaf-cafeco
Heroku address: https://cafeco.herokuapp.com.

The four implemented pieces of functionality are
(see info30005-leaf-cafeco/server/controllers directory):
* User (CRUD, find all, search, validate, login, get rewards)
* Restaurant (CRUD, find all, search, validate, login)
* Sale (CRUD, find all, search)
* Reward (CRUD, find all, search)

Selected REST inputs:

**** USER ****

=== Create User
POST https://cafeco.herokuapp.com/user
JSON
{
  "username":"id_value",
  "password":"password_value",
  "email":"email_value",
  "fname":"fname_value",
  "lname":"lname_value",
  "points":0,
  "photo":"photo_value"
}

=== Edit User
PUT https://cafeco.herokuapp.com/user/id_value
JSON
{
  "username":"id_value",
  "password":"password_value",
  "email":"UPDATED_email_value",
  "fname":"fname_value",
  "lname":"lname_value",
  "points":0,
  "photo":"photo_value"
}

=== Find All Users
POST https://cafeco.herokuapp.com/findAllUsers

=== Search User
GET https://cafeco.herokuapp.com/searchUser/id_value

=== Delete User
DELETE https://cafeco.herokuapp.com/user/id_value

=== Validate Username
GET https://cafeco.herokuapp.com/user/validate/id_value

=== Login User
POST https://cafeco.herokuapp.com/user/login
JSON
{
  "username":"id_value",
  "password":"password_value"
}

=== Get Rewards For Users
GET https://cafeco.herokuapp.com/user/id_value/rewards

**** RESTAURANT ****

=== Create Restaurant
POST https://cafeco.herokuapp.com/restaurant
JSON
{
  "id":"id_value",
  "password":"password_value",
  "email":"email_value",
  "name":"name_value",
  "address":{},
  "description":"description_value",
  "foodReviews":[{
    "username":"foodReviews.username_value",
    "review":"foodReviews.review_value",
    "rating":3
  }],
  "sustainabilityReviews":[{
    "username":"sustainabilityReviews.username_value",
    "review":"sustainabilityReviews.review_value",
    "rating":4
  }],
  "averageFoodRating":7,
  "averageSustainabilityRating":8,
  "typeOfRewards": "typeOfRewards_value",
  "photos":"photos"
}

=== Edit Restaurant
PUT https://cafeco.herokuapp.com/restaurant/id_value
JSON
{
  "id":"id_value",
  "password":"password_value",
  "email":"email_value",
  "name":"UPDATED_name_value",
  "address":{},
  "description":"description_value",
  "foodReviews":[{
    "username":"foodReviews.username_value",
    "review":"foodReviews.review_value",
    "rating":3
  }],
  "sustainabilityReviews":[{
    "username":"sustainabilityReviews.username_value",
    "review":"sustainabilityReviews.review_value",
    "rating":4
  }],
  "averageFoodRating":7,
  "averageSustainabilityRating":8,
  "typeOfRewards": "typeOfRewards_value",
  "photos":"photos"
}

=== Find All Restaurants
GET https://cafeco.herokuapp.com/findAllRestaurants

=== Search Restaurant
GET https://cafeco.herokuapp.com/searchRestaurant/id_value

=== Delete Restaurant
DELETE https://cafeco.herokuapp.com/restaurant/id_value

=== Validate Restaurant Id
GET https://cafeco.herokuapp.com/restaurant/validate/id_value

=== Login Restaurant
POST https://cafeco.herokuapp.com/restaurant/login
JSON
{
  "id":"id_value",
  "password":"password_value"
}

**** REWARD ****

=== Create Reward
POST https://cafeco.herokuapp.com/reward
JSON
{
  "id":"id_value",
  "username":"id_value",
  "price":33,
  "date":"2019-04-10T20:15:56.782Z",
  "type":"type"
}

=== Edit Reward
PUT https://cafeco.herokuapp.com/reward/id_value
JSON
{
  "id":"id_value",
  "username":"UPDATED_id_value",
  "price":55,
  "date":"2019-04-10T20:15:56.782Z",
  "type":"type"
}

=== Find All Rewards
GET https://cafeco.herokuapp.com/findAllRewards

=== Search Reward
GET https://cafeco.herokuapp.com/searchReward/id_value

=== Delete Reward
DELETE https://cafeco.herokuapp.com/reward/id_value

**** SALE ****

=== Create Sale
POST https://cafeco.herokuapp.com/sale
JSON
{
  "id":"id_value",
  "restaurantId":"restaurantId",
  "date":"2019-04-10T20:15:56.782Z",
  "price":55
}

=== Edit Sale
POST https://cafeco.herokuapp.com/sale/id_value
JSON
{
  "id":"id_value",
  "restaurantId":"UPDATED_restaurantId",
  "date":"2019-04-10T20:15:56.782Z",
  "price":55
}

=== Find All Sales
GET https://cafeco.herokuapp.com/findAllSales

=== Search Sale
GET https://cafeco.herokuapp.com/searchSale/id_value

=== Delete Sale
DELETE https://cafeco.herokuapp.com/sale/id_value

