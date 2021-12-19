var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
const db = require('../db.js');
var qs = require('querystring');

router.post('/login_process', function (request, response) {
    var body = ``;
    request.on('data', function(data){
        body = body + data;
    });
    request.on('end', function(){
        var post = qs.parse(body);
        var email = post.email;
        var password = post.password;
        db.query(`SELECT password, nickname FROM user WHERE email=?`, [email], function(err, res){
            console.log(res[0]);
            console.log(request.session);
            if(res[0].password == password){
                request.session.is_logined = true;
                request.session.email = email;
                request.session.nickname = res[0].nickname;
                request.session.save(function() {
                    response.redirect(`/`);
                });
            } else {
                response.send('Who?');
            }
            response.redirect(`/`);
        });
    });
});

module.exports = router;