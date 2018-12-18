var express = require('express');
var path = require('path');

app.use(express.static(__dirname + "/friendFinder"));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
