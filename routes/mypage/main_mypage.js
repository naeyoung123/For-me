var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
const db = require('../../db.js');

router.get('/mypage', function (request, response) {
    db.query(`SELECT * FROM user WHERE email = ?`, ['donut@forme.com'], function(err0, res0){
        db.query(`SELECT * FROM recommendation WHERE writer = ?`,['donut@forme.com'], function(err1, res1){
            db.query(`SELECT * FROM requirement WHERE writer = ?`, ['donut@forme.com'], function(err2, res2){
                var title = '마이페이지';
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
                        .recommendation_main{
                            margin-top:200px;
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
                                    <a href="/mypage/page_rec/page/${res1[i].id}">${res1[i].title}</a>
                                </td>
                                <td>${res1[i].writer}</td>
                                <td>${res1[i].date}</td>
                            </tr>
                    `;
                    i++;
                }
                i = 0
                while(i < res2.length) {
                    list_req += `
                            <tr>
                                <td>${res2[i].id}</td>
                                <td>
                                    <a href="/mypage/page_req/page/${res2[i].id}">${res2[i].title}</a>
                                </td>
                                <td>${res2[i].writer}</td>
                                <td>${res2[i].date}</td>
                            </tr>
                    `;
                    i++;
                }
                var body = `
                    <main class="flex-shrink-0">
                        <div class="recommendation_main">
                            <h3>${res0[0].nickname}의 Page</h3>
                            <p>email : ${res0[0].email}</p>
                            <p>nickname : ${res0[0].nickname}</p>
                            <table>
                            <th>recommendation</th>
                            <tr>
                                <td>No.</td>
                                <td>Title.</td>
                                <td>Writer</td>
                                <td>Date</td>
                            </tr>
                                ${list_rec}
                            </table>
                            <table>
                            <th>requirement</th>
                            <tr>
                                <td>No.</td>
                                <td>Title.</td>
                                <td>Writer</td>
                                <td>Date</td>
                            </tr>
                                ${list_req}
                            </table>
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