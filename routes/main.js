var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');

router.get('/', function (request, response) {
    var title = 'For me 나를 위해';
    var head = ``;
    var body = `
    <main class="flex-shrink-0">
    <div class="container">
        <div class="row">
            <center>
                <h1 class="mt-5"><b>For me</b> : 나를 위해 </h1><br>
                <h2>한 달에 한 번, 나를 위한 선택</h2>
                <img src='images/main1.png' alt="메인 사진" style = "display : block; width = 400px;" ><br>
                <button type="button" class="btn btn-secondary">종류별 장단점</button>
            </center>
        </div>
        <br> <br>
    </div>

    <div style="background-color: rgb(248,238,254);">
         <center>
            <br>
            <h1 class="mt-5">나에게 딱! 맞는 용품은?</h1>
            <button type="button" class="btn" style="background-color: rgb(145, 109, 145); color : white;">내 취향
                알아보기</button>
            <br>
        </center>
        <br><br>
    </div>

    <div class="container">
        <center>
        </center>
        <br><br>
    </div>
    </main>`;
    var html = template.HTML(title, head, body);
    response.send(html);
});

module.exports = router;