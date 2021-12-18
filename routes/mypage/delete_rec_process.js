var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
const db = require('../../db.js');
var qs = require('querystring');

router.post('/mypage/delete_rec_process', function (request, response) {
    var body = ``;
    request.on('data', function(data){
        body = body + data;
    });
    request.on('end', function(){
        var post = qs.parse(body);
        var id_ = post.id;
        var id = '';
        for(i = 0; i < id_.length-1; i++){
            id += id_[i];
        }
        db.query(`DELETE FROM recommendation WHERE id=?`, [id], function(err, res){
            if(err) throw err;
            response.writeHead(302, {Location: `/mypage`});
            response.end();
        });
    });
});

module.exports = router;