var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
const db = require('../../db.js');
var qs = require('querystring');

router.post('/mypage/update_req_process', function (request, response) {
    var body = ``;
    request.on('data', function(data){
        body = body + data;
    });
    request.on('end', function(){
        var post = qs.parse(body);
        var id = post.id;
        var title = post.title;
        var content = post.content;
        db.query(`UPDATE requirement SET title=?, content=? WHERE id=?`, [title, content, id], function(err, res){
            if(err) throw err;
            response.writeHead(302, {Location: `/mypage`});
            response.end();
        });
    });
});

module.exports = router;