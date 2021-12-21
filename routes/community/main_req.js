var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
var author = require('../../lib/author.js');
const db = require('../../db.js');
var path = require('path');

router.get('/community/requirement/list/:listId', function (request, response) {
    db.query(`SELECT * FROM requirement`, function(err, count){
        var cursor = path.parse(request.params.listId).base; // 현재페이지
        let list_size = 10; // 화면에서 보여줄 크기
        let bottom = 10; // 한번에 보이는 a태그 갯수
        let list_total = Math.ceil(count.length / list_size); // a태그 총 갯수
        let first = cursor - cursor % bottom + 1;
        let last = cursor - cursor % bottom + bottom;
        if(last > list_total) last = list_total;
        if (!cursor || cursor <= 0) 
            cursor = bottom
        if (!list_total || list_total<= 0) 
            list_total = bottom
        let offset = (cursor - 1) * list_size;
        
        db.query(`SELECT * FROM requirement LEFT JOIN user ON requirement.writer = user.email LIMIT ?, ?`, [offset, list_size], function (err, res) {
            var title = 'FORME에게 바란다.';
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
            while (i < res.length) {
                list += `
                    <tr>
                        <td>${(cursor -1) * list_size + i + 1}</td>
                        <td>
                            <a href="/community/requirement/page/${res[i].id}">${res[i].title}</a>
                        </td>
                        <td>${res[i].nickname}</td>
                        <td>${res[i].date}</td>
                    </tr>
                `;
                i++;
            }
            var paging = '';
            for(i = first; i < last + 1; i++){
                paging += `
                    <li class="page-item"><a class="page-link" href="/community/requirement/list/${i}">${i}</a></li>
                `
            }
            var body = `
            <main class="flex-shrink-0">
                <div class="container">
                <br>
                <center>
                    <img src="/images/requirement.png" align="center" width="400px">
                <br><br><br>
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
                        <div style= "text-align: center; display:inline-block;"> 
                            <ul class="pagination ">
                                <li class="page-item"><a class="page-link" href="/community/requirement/list/${cursor-1}">Previous</a></li>
                                ${paging}
                                <li class="page-item"><a class="page-link" href="/community/requirement/list/${cursor+1}">Next</a></li>
                            </ul>
                        </div>
                        <br>
                        <a href="/community/requirement/create">
                            <button id = "content-btn" type="button" class="btn">글쓰기</button>
                        </a>
                </center>
                </div>
            </main>
            `;
            var html = template.HTML(title, head, body, author.statusUI(request, response));
            response.send(html);
        });
    });
});

module.exports = router;