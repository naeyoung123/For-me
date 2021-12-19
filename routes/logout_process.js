var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
const db = require('../db.js');
var qs = require('querystring');

router.get('/logout_process', function(req,res){
    if(req.session.user){
        console.log('logout');

        req.session.destroy(function(err){
            if(err) throw err;
            res.redirect('/');
        });
    }
    else{
        res.redirect('/');
    }
});

module.exports = router;