const mysql = require('mysql');
const register = require('./validation/register');
//var express = require('express');
//var session = require('express-session');
//const bodyParser = require('body-parser');
//const path = require('path');



const database = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'Colacion#324265',
    database: 'retrogame_api',
    port: 3000
});



database.connect(function(err){
    if(err){
        return console.error('error:' + err.message);
    }
    console.log('Connected to MySQL server!');
});
module.exports = database;