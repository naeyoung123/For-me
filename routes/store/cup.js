var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');

router.get('/store/cup', function (request, response) {
    var title = '월경컵';
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
    .intro{
        width: 100%;
        text-align: center;
    }
    #intro{
        background-color: #FAEEFF;
        height: 200px;
        padding: 30px;
    }
    
    a{
        text-decoration: none;
        color: white;
        font-size: large;
    }
    li{
        list-style: none;
    }

    .side_menu{
        float: left;
        width: 14%;
        min-width: 145px;
        margin-right: 1em;
        list-style: none;
        padding-left: 1em;
    }
    .side_menu li{
        background-color: #B69EB4; 
        padding: 5px 10px;
        border-bottom: 1px solid white;
    }

    .content{
        border: #FAEEFF 3px solid;
        float: left;
        width: 75%; height: 850px;
        margin-top: 15px;
        margin-bottom: 100px;
        padding: 2%;
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
    .icon{
        width:20px;
        height:20px;
    }
</style>`;

    var body = `
    <div>
        <div id="intro">
            <h1 class="intro" id="intro_h1">월경컵</h1>
            <h3 class="intro" id="intro_h3">"이이러이러한 분들께 추천합니다.</h3>
        </div>
        <div>
            <ul class="side_menu">
                <li class="sideMenu"><a href="/pad">일회용 월경대</a></li>
                <li class="sideMenu"><a href="/cpad">면 월경대</a></li>
                <li class="sideMenu"><a href="/cup">월경컵</a></li>
                <li class="sideMenu"><a href="/tampon">탐폰</a></li>
                <li class="sideMenu"><a href="#">제품별 장단점</a></li>
            </ul>
        </div>
        <div class="content">
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
        </div>
    </div>
    `;
    var html = template.HTML(title, head, body);
    response.send(html);
});

module.exports = router;