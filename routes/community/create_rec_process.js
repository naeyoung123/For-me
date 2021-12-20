var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
const db = require('../../db.js');
var qs = require('querystring');

router.post('/community/recommendation/create_process', function (request, response) {
    var body = ``;
    request.on('data', function(data){
        body = body + data;
    });
    request.on('end', function(){
        var post = qs.parse(body);
        var title = post.title;
        var content = post.content;
        var date = new Date();
        var writer = request.session.email;
        db.query(`INSERT INTO recommendation (title, content, date, writer) VALUES(?, ?, ?, ?)`, [title, content, date, writer], function(err, res){
            if(err) throw err;
            response.writeHead(302, {Location: `/community/recommendation`});
            response.end();
        });
    });
});

module.exports = router;