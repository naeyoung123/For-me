var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
const db = require('../../db.js');

router.get('/community/requirement', function (request, response) {
    db.query(`SELECT * FROM requirement`, function(err, res){
        var title = 'FORME에게 바란다.';
        var head = `
            <style>
                .recommend_main{
                    margin-top:200px;
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
                        <a href="/community/requirement/page/${res[i].id}">${res[i].title}</a>
                    </td>
                    <td>${res[i].writer}</td>
                    <td>${res[i].date}</td>
                </tr>
            `;
            i++;
        }
        var body = `
            <main class="flex-shrink-0">
                <div class="recommend_main">
                    <a href="/community/create_req">글쓰기</a>
                    <table>
                    <tr>
                        <td>No.</td>
                        <td>Title.</td>
                        <td>Writer</td>
                        <td>Date</td>
                    </tr>
                        ${list}
                    </table>
                </div>
            </main>
        `;
        var html = template.HTML(title, head, body);
        response.send(html);
    })
});

module.exports = router;