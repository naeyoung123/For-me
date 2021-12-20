var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
const db = require('../../db.js');
var qs = require('querystring');

router.post('/community/recommendation/page/:pageId/comment_process', function (request, response) {
    var body = ``;
    request.on('data', function(data){
        body = body + data;
    });
    request.on('end', function(){
        var post = qs.parse(body);
        var content_id = post.content_id;
        var content = post.content;
        var date = new Date();
        var writer = request.session.email;
        db.query(`INSERT INTO comment_rec (content_id, content, date, writer) VALUES(?, ?, ?, ?)`, [content_id, content, date, writer], function(err, res){
            if(err) throw err;
            response.writeHead(302, {Location: `/community/recommendation/page/${content_id}`});
            response.end();
        });
    });
});

module.exports = router;