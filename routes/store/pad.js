var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');

router.get('/store/pad', function (request, response) {
    var title = '일회용월경대';
    var head = `
    <style>
    @font-face {
        font-family: 'NanumSquareRound';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    * {
        font-family: 'NanumSquareRound';
    }

    .box{
        float: left;
        border: 1px solid black;
        width: 20%; height: 25%;
        margin: 2%;
    }

    .box:hover{
        box-shadow: 5px 5px black;
    }

    .content{
        width: 100%; 
        height: 850px;
    }
    </style>`;
    var body = `
    <main class="flex-shrink-0">
    <div class="container">
        <div class="row">
            <center> 
            <img src='/images/pad.png' alt="일회용 월경대" width = "750px">
            </center>
        </div>
        <div class="content">
        <center>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>

            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>

            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
        </center>
        </div>  
    </div>
    </main>
`;
    var html = template.HTML(title, head, body);
    response.send(html);
});

module.exports = router;