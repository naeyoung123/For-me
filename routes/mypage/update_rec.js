var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
var author = require('../../lib/author.js');
const db = require('../../db.js');
var path = require('path');

router.get('/mypage/update/page_rec/:pageId', function (request, response) {
    var pageId = path.parse(request.params.pageId).base;
    db.query(`SELECT * FROM recommendation WHERE id=?`, [pageId], function(err, res){
        var title = '작성글수정';
        var head = `
            <style>
            body {
                text-align: center;
                background-color : #EEEEEE;
            }
            .formbox {
                display : inline-block;
                background-color: white;
                width: 800px;
                text-align: center;
                border: 1px solid black;
                margin-top: 100px auto;
                border-radius: 30px;
                padding-bottom: 30px;
            }
            textarea {
                width: 100%;
                height: 100%;
                border: none;
                resize: none;
              }

            .input {
                width: 100%;
                border: none;
                resize: none;
              }
            </style>
        `;
        var body = `
            <main class="flex-shrink-0" >
                <div class="container">
                <br><br>
                    <div class="formbox" >
                    <br>
                        <form action="/mypage/update_rec_process" method="post">
                            <input type="hidden" name="id" value= '${res[0].id}'>
                            <input class="input" type='text' name="title" value='${res[0].title}'>
                    <br>
                    <hr>
                            <textarea class="input" name="content">${res[0].content}</textarea>
                            <div class="submit_btn">
                                <input id="submit_button" size="sm" type="submit" value="저장">
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        `;
        var html = template.HTML(title, head, body, author.statusUI(request, response));
        response.send(html);
    });
});

module.exports = router;