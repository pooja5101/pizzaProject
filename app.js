const mongoose = require('mongoose');

const Pizzas = require('./models/pizzas');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });
