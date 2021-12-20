var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
var author = require('../../lib/author.js');
const db = require('../../db.js');

router.get('/community/requirement/create', function (request, response) {
    if(author.isOwner(request, response) === false){
        response.redirect('/community/requirement');
        return false;
    }
    var title = '건의글쓰기';
    var head = `
    <style>
    body {
        text-align: center;
        background-color : #EEEEEE;
    }
    .formbox {
        display : inline-block;
        background-color: white;
        width: 800px;
        text-align: center;
        border: 1px solid black;
        margin-top: 100px auto;
        border-radius: 30px;
        padding-bottom: 30px;
    }
    textarea {
        width: 100%;
        height: 60%;
        border: none;
        resize: none;
      }

    .input {
        width: 100%;
        border: none;
        resize: none;
      }
    </style>
    `;
    var body = `
    <main class="flex-shrink-0">
        <div class="container">
        <br>
            <img src='/images/create2.png'  width = "400px">
            <br><br>
            <div class="formbox">
            <br>
            <form action="/community/requirement/create_process" method="post">
                <input class="input" type='text' name="title" placeholder='제목'>
                <br>
                <hr>
                <textarea class="input" name="content" placeholder='내용'></textarea>
                <div class="submit_btn">
                    <input id="submit_button" size="sm" type="submit" value="저장">
                </div>
                </form>
            </div>
        </div>
    </main>
`;
    var html = template.HTML(title, head, body, author.statusUI(request, response));
    response.send(html);
});

module.exports = router;