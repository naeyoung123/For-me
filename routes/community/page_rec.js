var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
const db = require('../../db.js');
var path = require('path');

router.get('/community/recommendation/page/:pageId', function (request, response) {
    var pageId = path.parse(request.params.pageId).base;
    db.query(`SELECT * FROM recommendation WHERE id=?`, [pageId], function(err, res){
        var title = '추천글보기';
        var head = `
        <style>
            body {
                text-align: center;
                background-color : #EEEEEE;
            }
            .formbox {
                display : inline-block;
                background-color: white;
                width: 800px; height : 500px;
                text-align: left;
                border: 1px solid black;
                margin-top: 100px auto;
                border-radius: 30px;
                padding-bottom: 30px;
            }
       
            .input {
                width: 100%;
                border: none;
                resize: none;
                
              }
            .content2{
                width: 100%;
                height: 70%;
            }
        </style>
        `;
        var body = `
        <main class="flex-shrink-0">
            <div class="container">
                <br><br>
                <div class = "formbox">
                <br>
                <h5 name="title"><center><b>${res[0].title}</b></center></h5>
                <hr>
                <h5 class = "content2" name="content">${res[0].content}</h5>
                </div>
            </div>
        </main>
       
        `;
        var html = template.HTML(title, head, body);
        response.send(html);
    });
});

module.exports = router;