var express = require('express');
var path = require('path');

app.use(express.static(__dirname + "/app/public"));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
