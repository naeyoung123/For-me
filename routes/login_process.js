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
                    request.session.save(function(){
                        isOwner = true;
                        if(isOwner){
                            authStatusUI = '<a class="nav-link" href="/logout_process">로그아웃</a>';
                        }
                        console.log(isOwner);
                        return response.redirect('/');
                    });
                }
                else {
                    return response.redirect('/login')
                }
                
            
            });

    });
});


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