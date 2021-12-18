var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
const db = require('../../db.js');
var path = require('path');

router.get('/mypage/page_rec/page/:pageId', function (request, response) {
    var pageId = path.parse(request.params.pageId).base;
    db.query(`SELECT * FROM recommendation WHERE id=?`, [pageId], function (err, res) {
        var title = '작성글보기';
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
                <h5 name="title">  제목: ${res[0].title}</h5>
                <hr>
                <h6 class = "content2" name="content">  내용: ${res[0].content}</h6>
                
                <div style = "text-align:center; ">
                    <div style = "margin-right:10px; display:inline-block;">
                        <a href="/mypage/update/page_rec/${res[0].id}">
                            <input type="button" value="수정하기">
                        </a> 
                    </div>

                    <div style = "display:inline-block;">
                        <form action="/mypage/delete_rec_process" method="post">
                            <input type="hidden" name="id" value=${res[0].id}/>
                            <input type="submit" value = "삭제하기" ></input>
                        </form>
                    </div>
                </div>
            </div>
        </main>
        `;
        var html = template.HTML(title, head, body);
        response.send(html);
    });
});

module.exports = router;