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
        db.query(`DELETE FROM comment_rec WHERE id=?`, [id], function(err, res){
            if(err) throw err;
            response.writeHead(302, {Location: `/mypage`});
            response.end();
        });
    });
});

module.exports = router;