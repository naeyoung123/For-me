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
        
        var col = ['email', 'nickname'];
        var tablename = 'user';
            db.query('SELECT ?? FROM ?? WHERE email = ? and password = ?', [col, tablename, email, password], function(err, data){
                if(err) throw err;
            
                var user = data[0];
                if(email == data[0].email || password == data[0].password){
                    request.session.email = user.email;
                    request.session.save(function(){
                        return response.redirect('/');
                    });
                }
                else {
                    return response.redirect('/login')
                }
                
                if(err) {
                    response.writeHead(200, {Location: `/login`});
                    response.end();
                }
            
            });

    });
});

module.exports = router;