var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');

router.get('/store/tampon', function (request, response) {
    var title = '탐폰';
    var head = `
    <style>
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
            <img src='/images/tampon.png' alt="탐폰" width = "750px">
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