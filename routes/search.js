var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
const db = require('../db.js');
var qs = require('querystring');

router.post('/search', function (request, response) {
    var _body = ``;
    request.on('data', function(data){
        _body = _body + data;
    });
    request.on('end', function(){
        var post = qs.parse(_body);
        db.query(`SELECT * FROM recommendation WHERE content LIKE ? OR title LIKE ?`, ['%' + post.search + '%', '%' + post.search + '%'],  function(err, res){
            //제품 검색 추가 필요!
            var title = '검색결과';
            var head = `
                <style>
                   
                </style>
            `;
            var list_store = `
                <th><h2>제품</h2></th>
                <tr><td><h4>'${post.search}'에 대한 검색 결과가 없습니다.</h4></td></tr>
            `;
            var list_rec = '';
            var i = 0;
            if(res.length === 0){
                list_rec += `
                    <th><h2>제품추천</h2></th>
                    <tr><td><h4>'${post.search}'에 대한 검색 결과가 없습니다.</h4></td></tr>
                `;
            } else{
                list_rec += `
                    <th>제품추천</th>
                    <tr>
                        <td>No.</td>
                        <td>Title.</td>
                        <td>Writer</td>
                        <td>Date</td>
                    </tr>
                `;
                while(i < res.length) {
                    list_rec += `
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
            }
            var body = `
            <main class="flex-shrink-0">
            <div class="container">
                
                <br><br>
                    <center>
                        <table>
                            ${list_store}
                        </table>
                        <br><br>
                        <table>
                            ${list_rec}
                        </table>
                    </center>
             
            </div>
            </main>
            `;
            var html = template.HTML(title, head, body);
            response.send(html);
        })
    })
});

module.exports = router;