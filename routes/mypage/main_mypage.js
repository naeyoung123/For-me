var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
var author = require('../../lib/author.js');
const db = require('../../db.js');

router.get('/mypage', function (request, response) {
    db.query(`SELECT * FROM user WHERE email = ?`, ['naeyoung123@naver.com'], function(err0, res0){
        db.query(`SELECT * FROM recommendation WHERE writer = ?`,['naeyoung123@naver.com'], function(err1, res1){
            db.query(`SELECT * FROM requirement WHERE writer = ?`, ['naeyoung123@naver.com'], function(err2, res2){
                var title = '마이페이지';
                var head = `
                    <style>
                        table, td ,th {
                            border : 2px solid gray;
                            border-collapse : collapse;
                            padding : 15px;
                        }
                        a{
                            text-decoration: none; 
                            color : black;
                        }
                        a:hover{
                            text-decoration: none; 
                            color : gray;
                        }
                    </style>
                `;
                var list_rec = '';
                var list_req = '';
                var i = 0;
                while(i < res1.length) {
                    list_rec += `
                            <tr>
                                <td>${res1[i].id}</td>
                                <td>
                                    ${res1[i].title}
                                </td>
                                <td>${res1[i].writer}</td>
                                <td>${res1[i].date}</td>
                                <td><a href="/mypage/page_rec/page/${res1[i].id}">수정하기</a></td>
                            </tr>
                    `;
                    i++;
                }
                i = 0
                while(i < res2.length) {
                    list_req += `
                            <tr>
                                <td>${res2[i].id}</td>
                                <td>${res2[i].title}</td>
                                <td>${res2[i].writer}</td>
                                <td>${res2[i].date}</td>
                                <td><a href="/mypage/page_req/page/${res2[i].id}">수정하기</a></td>
                            </tr>
                    `;
                    i++;
                }
                var body = `
                    <main class="flex-shrink-0">
                    <div class="container">
                    <br>
                    <center>
                            <img src="images/mypage.png" align="center" width="200px">
                            <h1><b>${res0[0].nickname}의 MyPage</b></h1>
                            <h4>email : ${res0[0].email}</h4>
                            <h4>nickname : ${res0[0].nickname}</h4>
                        </div>
                    </center>
                    </div>

                    <div class = "container">
                        <center>
                            <table width = "80%">
                            <tr style = "background-color : #EEEEEE;">
                                <img src="images/mypage2.png" style = "float:left; margin-left : 10%;" width="300px">
                               
                                <td width = "10%"><b>No</b></td>
                                <td width = "40%"><b>제목</b></td>
                                <td width = "20%"><b>작성자</b></td>
                                <td width = "20%"><b>작성일</b></td>
                                <td width = "10%"><b>글수정</b></td>
                              
                            </tr>
                                ${list_rec}
                            </table>
                            <br><br>
                            <img src="images/mypage3.png" style = "float:left; margin-left : 10%;"  width="380px">
                            <table width = "80%">
                            <tr style = "background-color : #EEEEEE;">
                                <td width = "10%"><b>No</b></td>
                                <td width = "40%"><b>제목</b></td>
                                <td width = "20%"><b>작성자</b></td>
                                <td width = "20%"><b>작성일</b></td>
                                <td width = "10%"><b>글수정</b></td>
                            </tr>
                                ${list_req}
                            </table>
                            <br><br>
                        </div>
                        </center>
                        </div>
                    </main>
                `;
                var html = template.HTML(title, head, body, author.statusUI(request, response));
                response.send(html);
            })
        })
    })
});

module.exports = router;