var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
const db = require('../../db.js');
var path = require('path');

router.get('/mypage/page_req/page/:pageId', function (request, response) {
    var pageId = path.parse(request.params.pageId).base;
    db.query(`SELECT * FROM requirement WHERE id=?`, [pageId], function(err, res){
        var title = '요청글보기';
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
                    margin-top:100px;
                }
            </style>
        `;
        var body = `
            <main class="flex-shrink-0">
                <div class="container">
                    <p name="title">제목:${res[0].title}</p>
                    <hr>
                    <p name="content">내용:${res[0].content}</p>
                    <a href="/mypage/update/page_req/${res[0].id}">수정</a>
                    <form action="/mypage/delete_req_process" method="post">
                        <input type="hidden" name="id" value=${res[0].id}/>
                        <input type="submit" value="삭제">
                    </form>
                </div>
            </main>
        `;
        var html = template.HTML(title, head, body);
        response.send(html);
    });
});

module.exports = router;