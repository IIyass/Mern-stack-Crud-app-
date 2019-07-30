var App = require('express');
var app= new App();
var ProfilRoute = require('./Api/Routes/Profils');
var morgan = require('morgan');
var bodyparser =require('body-parser');
var mongoose = require('mongoose');
var cors = require ('cors');

mongoose.connect("mongodb://localhost/Work",{useNewUrlParser:true});

app.use(cors());
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());




app.use('/Profils',ProfilRoute);

app.use(function(req,res,next){
    res.status(404).json({
        error:{
            message: 'error.message'
        }       
    });
});

module.exports=app;