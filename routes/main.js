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
            <br><br>
                <img src='images/main1.png'  width="600px" alt="메인 사진" ><br><br>
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
            <div>
                
            </div>
        </center>
        <br><br>
    </div>
    </main>`;
    
    var html = template.HTML(title, head, body);
    response.send(html);
});

module.exports = router;