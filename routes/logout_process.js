var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
const db = require('../db.js');
var qs = require('querystring');
const { is } = require('type-is');

router.get('/logout_process', function(request,response){
    console.log('logout_process 호출됨');

    if(request.session.user){
        console.log('logout');

        req.session.destroy(function(err){
            if(err) throw err;
            console.log("세션 삭제 후 로그아웃");
            res.redirect('/');
        });
    }
    else{
        console.log('로그인 상태 아님');
        res.redirect('/');
    }
})


module.exports = router;