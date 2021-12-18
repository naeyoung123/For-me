var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
const db = require('../../db.js');

router.get('/mypage', function (request, response) {
    db.query(`SELECT * FROM user WHERE email = ?`, ['naeyoung123@naver.com'], function(err0, res0){
        db.query(`SELECT * FROM recommendation WHERE writer = ?`,['naeyoung123@naver.com'], function(err1, res1){
            db.query(`SELECT * FROM requirement WHERE writer = ?`, ['naeyoung123@naver.com'], function(err2, res2){
                var title = '마이페이지';
                var head = `
                    <style>
                        table, td ,th {
                            border : 1px solid black;
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
                        <div>
                        <center>
                            <table>
                            <th>제품추천</th>
                            <tr>
                                <td>No.</td>
                                <td>Title.</td>
                                <td>Writer</td>
                                <td>Date</td>
                                <td>Update</td>
                            </tr>
                                ${list_rec}
                            </table>
                            <br><br>
                            <table>
                            <th>ForMe에게 바란다</th>
                            <tr>
                                <td>No.</td>
                                <td>Title.</td>
                                <td>Writer</td>
                                <td>Date</td>
                                <td>Update</td>
                            </tr>
                                ${list_req}
                            </table>
                            <br><br>
                        </div>
                        </center>
                        </div>
                    </main>
                `;
                var html = template.HTML(title, head, body);
                response.send(html);
            })
        })
    })
});

module.exports = router;