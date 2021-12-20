var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
const db = require('../../db.js');
var qs = require('querystring');
var moment= require('moment');

router.post('/community/requirement/create_process', function (request, response) {
    if(author.isOwner(request, response) === false){
        response.redirect('/');
        return false;
    }
    var body = ``;
    request.on('data', function(data){
        body = body + data;
    });
    request.on('end', function(){
        var post = qs.parse(body);
        var title = post.title;
        var content = post.content;
        var date = moment().format("YYYY-MM-DD");
        var writer = request.session.email;
        db.query(`INSERT INTO requirement (title, content, date, writer) VALUES(?, ?, ?, ?)`, [title, content, date, writer], function(err, res){
            if(err) throw err;
            response.writeHead(302, {Location: `/community/requirement`});
            response.end();
        });
    });
});

module.exports = router;