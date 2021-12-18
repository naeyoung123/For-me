var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
const db = require('../../db.js');
var path = require('path');

router.get('/community/recommendation/page/:pageId', function (request, response) {
    var pageId = path.parse(request.params.pageId).base;
    db.query(`SELECT * FROM recommendation WHERE id=?`, [pageId], function(err, res){
        var title = '추천글보기';
        var head = `
                .recommendation_page{
                    margin-top:200px;
                }
            </style>
        `;
        var body = `
            <main class="flex-shrink-0">
                <div class="recommendation_page">
                    <p name="title">제목:${res[0].title}</p>
                    <hr>
                    <p name="content">내용:${res[0].content}</p>
                </div>
            </main>
        `;
        var html = template.HTML(title, head, body);
        response.send(html);
    });
});

module.exports = router;