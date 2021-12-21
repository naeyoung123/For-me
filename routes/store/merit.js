var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
var author = require('../../lib/author.js');

router.get('/store/merit', function (request, response) {
    var title = '제품별장단점';
    var head = `
    `;
    var body = `
    <main class="flex-shrink-0">
    <div class="container">
    <br>
    <div class="row">
        <div class="col-md-6" style = "border : solid gray 1px; "> 
            <img src='/images/pad.png' alt="일회용 월경대" width = "100%">
            <center><a href="/store/pad/1"><button type="button" class="btn btn-secondary">일회용 월경대 제품 보러가기</button></a></center><br>
            </div>
        <div class="col-md-6" style = "border : solid gray 1px;"> 
            <img src='/images/cpad.png' alt="면 월경대" width = "100%" >
            <center><a href="/store/cpad/1"><button type="button" class="btn btn-secondary">면 월경대 제품 보러가기</button></a></center><br>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6" style = "border : solid gray 1px;"> 
            <img src='/images/cup.png' alt="월경컵" width = "100%" >
            <center><a href="/store/cup/1"><button type="button" class="btn btn-secondary">월경컵 제품 보러가기</button></a></center><br>
        </div>
        <div class="col-md-6" style = "border : solid gray 1px;"> 
            <img src='/images/tampon.png' alt="탐폰" width = "100%" >
            <center><a href="/store/tampon/1"><button type="button" class="btn btn-secondary">탐폰 제품 보러가기</button></a></center><br>
        </div>
    </div>
    <br><br>
    </main>
`;
    var html = template.HTML(title, head, body, author.statusUI(request, response));
    response.send(html);
});

module.exports = router;