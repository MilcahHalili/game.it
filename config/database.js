var mongoose = require('mongoose');

//mongoose (the ODM) connecting to the correct databse in mongodb 
mongoose.connect('mongodb://localhost/movies');

var db = mongoose.connection;

db.once('open', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('error', function(err) {
    console.log(`Database error:\n${err}`);
});