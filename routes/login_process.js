var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
const db = require('../db.js');
var qs = require('querystring');
const { is } = require('type-is');


router.post('/login_process', function (request, response) {
    var body = ``;
    request.on('data', function(data){
        body = body + data;
    });
    request.on('end', function(){
        var post = qs.parse(body);
        var email = post.email;
        var password = post.password;
        
        var col = 'email';
        var tablename = 'user';
        var isOwner = false;
        var authStatusUI = '<a class="nav-link" href="/login">로그인</a>';
        
        
            db.query('SELECT ?? FROM ?? WHERE email = ? and password = ?', [col, tablename, email, password], function(err, data){
                if(err) throw err;
                if(!data[0])
                    return response.redirect('/login');

                var user = data[0];
                
                if(err) throw err;
                if(email == data[0].email || password == data[0].password){
                    request.session.email = user.email;
                    isOwner = true;
                    request.session.save(function(){
                    
                        
                        if(isOwner === true){//로그인 된 경우라면
                            
                            authStatusUI = '<a class="nav-link" href="/logout_process">로그아웃</a>';
                        }
                        return response.redirect('/');
                        
                    });
                   
                        //console.log(isOwner);
                }
                else {
                    return response.redirect('/login')
                }
                
            
            });

    });
});


module.exports = router;