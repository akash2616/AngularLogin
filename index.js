/**
 * Created by mohitea on 16/06/16.
 */
var bodyParser = require("body-parser");
var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/register', function (req, res) {
    console.log(req.body);
    res.send(req.body);

});

app.listen(3002, function () {
    console.log('Example app listening on port 3002!');
});