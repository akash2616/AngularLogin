/**
 * Created by mohitea on 16/06/16.
 */
var mongoose = require('mongoose');
var db = mongoose. connect('mongodb://127.0.0.1:27017/test');
mongoose. connection. once('connected', function() {
    console.log("Connected to database");
});

newUserSchema.save(function(err) {
    if (err) throw err;

    console.log('User created!');
});