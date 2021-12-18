var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
const db = require('../../db.js');

router.get('/community/create_req', function (request, response) {
    var title = '건의글쓰기';
    var head = `
    <style>
        
        .create_main{
            margin-top:200px;
        }
    </style>
    `;
    var body = `
    <main class="flex-shrink-0">
        <div class="create_main">
            <form action="/community/create_req_process" method="post">
                <input class="input" type='text' name="title" placeholder='제목'/>
                <br>
                <hr>
                <textarea class="input" name="content" placeholder='내용'></textarea>
                <div class="submit_btn">
                    <input id="submit_button" size="sm" type="submit" value="저장">
                </div>
            </form>
        </div>
    </main>
`;
    var html = template.HTML(title, head, body);
    response.send(html);
});

module.exports = router;