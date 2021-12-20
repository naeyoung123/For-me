var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
var author = require('../../lib/author.js');
const db = require('../../db.js');
var qs = require('querystring');

router.post('/mypage/like_process/cup', function (request, response) {
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
        var id = post.id;
        var user = request.session.email;
        db.query(`DELETE FROM liked WHERE store_id=? and user_id=? and type=?`, [id, user, 2], function(err1, res1){
            if(err1) throw err1;
            response.writeHead(302, {Location: `/mypage`});
            response.end();
        });
    });
});

module.exports = router;