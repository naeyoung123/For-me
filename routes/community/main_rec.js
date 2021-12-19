var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
const db = require('../../db.js');

router.get('/community/recommendation', function (request, response) {
    db.query(`SELECT * FROM recommendation`, function(err, res){
        var title = '제품추천';
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
            #content-btn{
                background-color : #EEEEEE;
                border : 1px solid #C2C2C2;
            }
            </style>
        `;
        var list = '';
        var i = 0;
        while(i < res.length) {
            list += `
                    <tr>
                        <td>${res[i].id}</td>
                        <td>
                            <a href="/community/recommendation/page/${res[i].id}">${res[i].title}</a>
                        </td>
                        <td>${res[i].writer}</td>
                        <td>${res[i].date}</td>
                    </tr>
            `;
            i++;
        }
        var body = `
        <main class="flex-shrink-0">
            <div class="container">
            <br>
                <center>
                    <img src="/images/recommendation.png" align="center" width="400px">
            <br><br><br>
                <center>
                    <table width = "80%">
                    <tr style = "background-color : #EEEEEE;">
                        <td width = "10%"><b>No</b></td>
                        <td width = "45%"><b>제목</b>.</td>
                        <td width = "25%"><b>작성자</b></td>
                        <td width = "20%"><b>작성일</b></td>
                      
                    </tr>
                        ${list}
                    </table>
                    <br>
                    <a href="/community/recommendation/create">
                        <button id = "content-btn" type="button" class="btn">글쓰기</button>
                    </a>
                </center>
            </div>
        </main>
        `;
        var html = template.HTML(title, head, body);
        response.send(html);
    })
});

module.exports = router;