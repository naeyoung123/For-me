var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
const db = require('../../db.js');
var qs = require('querystring');

router.post('/mypage/delete_com_process', function (request, response) {
    var body = ``;
    request.on('data', function(data){
        body = body + data;
    });
    request.on('end', function(){
        var post = qs.parse(body);
        var id = post.id;
        db.query(`UPDATE comment_rec SET content=? WHERE id=?`, ['삭제된 댓글입니다.', id], function(err, res){
            if(err) throw err;
            response.writeHead(302, {Location: `/mypage`});
            response.end();
        });
    });
});

module.exports = router;