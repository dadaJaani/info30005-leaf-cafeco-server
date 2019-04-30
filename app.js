var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Database setup
require('./models/db.js');

//CORS
var cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:3000/'
}

app.use(cors())


// Routes setup
var routes = require('./routes/routes.js');
app.use('/',routes);

// Start the server
var port = process.env.PORT || 3001;
app.listen(port,function(req,res){
    console.log('Cafeco server listening on port: ' + port + '.');
});