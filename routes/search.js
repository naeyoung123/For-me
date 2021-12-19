var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
const db = require('../db.js');
var qs = require('querystring');

router.post('/search', function (request, response) {
    var _body = ``;
    request.on('data', function(data){
        _body = _body + data;
    });
    request.on('end', function(){
        var post = qs.parse(_body);
        db.query(`SELECT * FROM recommendation WHERE content LIKE ? OR title LIKE ?`, ['%' + post.search + '%', '%' + post.search + '%'],  function(err, rec){
            db.query(`SELECT * FROM pad WHERE company LIKE ? OR brand LIKE ? OR product LIKE ?`, ['%' + post.search + '%', '%' + post.search + '%', '%' + post.search + '%'], function(err, pad){
                db.query(`SELECT * FROM cpad WHERE company LIKE ? OR product LIKE ?`, ['%' + post.search + '%', '%' + post.search + '%'], function(err, cpad){
                    db.query(`SELECT * FROM cup WHERE company LIKE ? OR product LIKE ?`, ['%' + post.search + '%', '%' + post.search + '%'], function(err, cup){
                        db.query(`SELECT * FROM tampon WHERE company LIKE ? OR brand LIKE ? OR product LIKE ?`, ['%' + post.search + '%', '%' + post.search + '%', '%' + post.search + '%'], function(err, tampon){
                            var title = '검색결과';
                            var head = `
                                <style>
                                    table, td ,th {
                                        border : 2px solid gray;
                                        border-collapse : collapse;
                                        padding : 15px;
                                    }
                                    .box{
                                        float: left;
                                        border: 1px solid black;
                                        width: 20%; height: 25%;
                                        margin: 2%;
                                        text-align : center;
                                    }
                                    a{
                                        text-decoration: none; 
                                        color : black;
                                    }
                                    a:hover{
                                        text-decoration: none; 
                                        color : gray;
                                    }
                                    .box:hover{
                                        box-shadow: 5px 5px gray;
                                    }
                        
                                    #card .card-body {
                                        position: absolute;
                                        float: left;
                                        border: 1px solid black;
                                        width: 100%; height: 100%;
                                        margin: 0;
                                        text-align : center;
                                        background: rgba(0, 0, 0, 0.6);
                                        opacity: 0;
                                        transition: all 0.6s ease-in-out;
                                        z-index: 10;
                                    }
                        
                                    #card #li {
                                        padding: 0;
                                        overflow: hidden;
                                        position: relative;
                                    }
                        
                                    #card #li:hover .card-body {
                                        opacity: 1;
                                        transform: translateY(-210px);
                                    }
                        
                                    #card .card-body h5 {
                                        color: #ffffff;
                                        text-align: left;
                                    }
                        
                                    .content{
                                        width : 100%; 
                                        height : 850px;
                                    }
                                </style>
                            `;
                            var list_pad = '';
                            if(pad.length === 0){
                                list_pad += `
                                <br>
                                    <tr><td><h4>'${post.search}'에 대한 검색 결과가 없습니다.</h4></td></tr>
                                <br>
                                `;
                            } else{
                                for(i = 0; i < pad.length; i++) {
                                    list_pad += `
                                        <div class="box">
                                            <div id="card">
                                                <a href = "${pad[i].address}">
                                                    <div id="li">
                                                        <img src="${pad[i].image}" style= "position:absoulte; width:100%; height:100%;">
                                                        <div class="card-body">
                                                            <h5 class="card-text">제조사명<br>: ${pad[i].company}</h5><br>
                                                            <h5 class="card-text">제품명<br>: ${pad[i].product}</h5>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    `;
                                }
                            }
                            var list_cpad = '';
                            if(cpad.length === 0){
                                list_cpad += `
                                <br>
                                    <tr><td><h4>'${post.search}'에 대한 검색 결과가 없습니다.</h4></td></tr>
                                <br>
                                `;
                            } else{
                                for(i = 0; i < cpad.length; i++) {
                                    list_cpad += `
                                        <div class="box" >
                                            <div id="card">
                                                <a href = "${cpad[i].address}">
                                                    <div id="li">
                                                        <img src="${cpad[i].image}" style= "position:absoulte; width:100%; height:100%;">
                                                        <div class="card-body">
                                                            <h5 class="card-text">제조사명<br>: ${cpad[i].company}</h5><br>
                                                            <h5 class="card-text">제품명<br>: ${cpad[i].product}</h5>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <br>
                                    `;
                                }
                            }
                            
                            var list_cup = '';
                            if(cup.length === 0){
                                list_cup += `
                                <br>
                                    <tr><td><h4>'${post.search}'에 대한 검색 결과가 없습니다.</h4></td></tr>
                                <br>
                                `;
                            } else{
                                for(i = 0; i < cup.length; i++) {
                                    list_cup += `
                                        <div class="box">
                                            <div id="card">
                                                <a href = "${cup[i].address}">
                                                    <div id="li">
                                                        <img src="${cup[i].image}" style= "position:absoulte; width:100%; height:100%;">
                                                        <div class="card-body">
                                                            <h5 class="card-text">제조사명<br>: ${cup[i].company}</h5><br>
                                                            <h5 class="card-text">제품명<br>: ${cup[i].product}</h5>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <br>
                                    `;
                                }
                            }

                            var list_tampon = '';
                            if(tampon.length === 0){
                                list_tampon += `
                                <br>
                                    <tr><td><h4>'${post.search}'에 대한 검색 결과가 없습니다.</h4></td></tr>
                                <br>
                                `;
                            } else{
                                for(i = 0; i < tampon.length; i++) {
                                    list_tampon += `
                                        <div class="box" >
                                            <div id="card">
                                                <a href = "${tampon[i].address}">
                                                    <div id="li">
                                                        <img src="${tampon[i].image}" style= "position:absoulte; width:100%; height:100%;">
                                                        <div class="card-body">
                                                            <h5 class="card-text">제조사명<br>: ${tampon[i].company}</h5><br>
                                                            <h5 class="card-text">제품명<br>: ${tampon[i].product}</h5>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    <br>
                                    `;
                                }
                            }
                            var list_rec = '';
                            if(rec.length === 0){
                                list_rec += `
                                    <th><h3>제품추천</h3></th>
                                    <tr><td><h4>'${post.search}'에 대한 검색 결과가 없습니다.</h4></td></tr>
                                `;
                            } else{
                                list_rec += `
                                <tr style = "background-color : #EEEEEE;">
                                    <td width = "10%"><b>No</b></td>
                                    <td width = "45%"><b>제목</b>.</td>
                                    <td width = "25%"><b>작성자</b></td>
                                    <td width = "20%"><b>작성일</b></td>
                                </tr>
                                
                                `;
                                for(i = 0; i < rec.length; i++) {
                                    list_rec += `
                                            <tr>
                                                <td>${rec[i].id}</td>
                                                <td>
                                                    <a href="/community/recommendation/page/${rec[i].id}">${rec[i].title}</a>
                                                </td>
                                                <td>${rec[i].writer}</td>
                                                <td>${rec[i].date}</td>
                                            </tr>
                                    `;
                                }
                            }
                            var body = `
                            <main class="flex-shrink-0">
                                <div class="container">
                                <br><br>
                                    <div class="content">
                                            <h3><b>일회용 월경대</b></h3>
                                            ${list_pad}
                                    </div>
                                    
                                    <br><hr><br>
                                    <div class="content">
                                            <h3><b>면 월경대</b></h3>
                                            ${list_cpad}
                                    </div>
                                    <br><hr><br>
                                    <div class="content">
                                            <h3><b>월경컵</b></h3>
                                            ${list_cup}
                                    </div>
                                    <br><hr><br>
                                    <div class="content" >
                                            <h3><b>탐폰</b></h3>
                                            ${list_tampon}
                                    </div>
                                   
                                    <br><hr><br>
                                    <div class="content">
                                        <div>
                                            <center>
                                            <br>
                                            <img src="images/mypage2.png" style = "float:left; margin-left : 2%;"  width="380px">
                                            <table width = "95%">
                                                ${list_rec}
                                            </table>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </main>
                            `;
                            var html = template.HTML(title, head, body);
                            response.send(html);
                        })
                    })
                })
            })
        })
    })
});

module.exports = router;