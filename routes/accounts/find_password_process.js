var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
const db = require('../../db.js');
var qs = require('querystring');

router.post('/find_password_process', function (request, response) {
    var body = ``;
    request.on('data', function(data){
        body = body + data;
    });
    request.on('end', function(){
        var post = qs.parse(body);
        var email = post.email;
        var nickname = post.nickname;
        db.query(`SELECT password FROM user WHERE email=? and nickname=?`, [email, nickname], function(err, res){
            if (res[0] == undefined) {
                response.end(`/not our user`);
            } else{
                response.redirect(`/find_password/success/${email}`);
            }
        });
    });
});

module.exports = router;