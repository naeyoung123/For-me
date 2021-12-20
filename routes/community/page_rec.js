var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
var author = require('../../lib/author.js');
const db = require('../../db.js');
var path = require('path');

router.get('/community/recommendation/page/:pageId', function (request, response) {
    if(author.isOwner(request, response) === false){
        response.redirect('/community/recommendation');
        return false;
    }
    var pageId = path.parse(request.params.pageId).base;
    db.query(`SELECT * FROM recommendation WHERE id=?`, [pageId], function(err, res){
        db.query(`SELECT * FROM comment_rec LEFT JOIN user ON comment_rec.writer = user.email WHERE content_id=?`, [pageId], function(err, com){
            console.log(com)
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
                table, td ,th {
                    border : 2px solid gray;
                    border-collapse : collapse;
                    padding : 10px;
                }
            </style>
            `;
            var list_com = '';
            for(i= 0; i < com.length; i++) {
                list_com += `
                        <tr>
                            <td>${com[i].content}</td>
                            <td>${com[i].nickname}</td>
                        </tr>
                `;
            }
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
                    <br><br><br>
                    <div>
                        <form action="/community/recommendation/page/:pageId/comment_process" method="post">
                            <input type="hidden" name="content_id" value="${res[0].id}"/>
                            <input type="textarea" name="content" placeholder="댓글" style = "width : 800px; height : 50px;"><br>
                            <button type="submit" class="btn btn-sm btn-secondary" style = "float:right; margin-right : 20%">댓글 작성</button><br>
                        </form>
                    </div>
                    <center>
                    <table width="800px">
                    <tr style = "background-color : #C2C2C2;">
                        <td><b>댓글</b></td>
                        <td><b>닉네임</b></td>
                     </tr>
                        ${list_com}
                    </table>
                    </center>
                    <br><br><br>
                </div>
            </main>
            `;
            var html = template.HTML(title, head, body, author.statusUI(request, response));
            response.send(html);
        })
    });
});

module.exports = router;