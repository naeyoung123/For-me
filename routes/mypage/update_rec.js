var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
const db = require('../../db.js');
var path = require('path');

router.get('/mypage/update/page_rec/:pageId', function (request, response) {
    var pageId = path.parse(request.params.pageId).base;
    db.query(`SELECT * FROM recommendation WHERE id=?`, [pageId], function(err, res){
        var title = '추천글수정';
        var head = `
            <style>
                @font-face {
                    font-family: 'NanumSquareRound';
                    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
                    font-weight: normal;
                    font-style: normal;
                }
                *{
                    font-family: 'NanumSquareRound';
                }
                .container{
                    margin-top:200px;
                }
            </style>
        `;
        var body = `
            <main class="flex-shrink-0">
                <div class="container">
                    <form action="/mypage/update_rec_process" method="post">
                        <input type="hidden" name="id" value=${res[0].id}/>
                        <input class="input" type='text' name="title" value=${res[0].title}/>
                        <br>
                        <hr>
                        <textarea class="input" name="content">${res[0].content}</textarea>
                        <div class="submit_btn">
                            <input id="submit_button" size="sm" type="submit" value="저장">
                        </div>
                    </form>
            </div>
            </main>
        `;
        var html = template.HTML(title, head, body);
        response.send(html);
    });
});

module.exports = router;