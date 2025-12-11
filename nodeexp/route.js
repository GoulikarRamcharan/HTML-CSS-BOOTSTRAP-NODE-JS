var express = require("express");

var router = express.Router();

router.get("/",function(req,res){

    res.send("Hello Guys");
});

router.get("/foo",function(req,res){

    res.send("Hello Guys!!!FOO");
});

router.get("/bar",function(req,res){

    res.send("Hello Guys Runn...!!!");
});


module.exports = router;