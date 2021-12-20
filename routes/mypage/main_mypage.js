var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
var author = require('../../lib/author.js');
const db = require('../../db.js');

router.get('/mypage', function (request, response) {
    db.query(`SELECT * FROM user WHERE email = ?`, [request.session.email], function(err0, res0){
        db.query(`SELECT * FROM recommendation WHERE writer = ?`,[request.session.email], function(err1, res1){
            db.query(`SELECT * FROM requirement WHERE writer = ?`, [request.session.email], function(err2, res2){
                db.query(`SELECT * FROM comment_rec WHERE writer = ?`, [request.session.email], function(err3, com){
                db.query(`SELECT * FROM pad LEFT JOIN liked ON pad.id=liked.store_id WHERE user_id=? and type=?`, [request.session.email, 0], function(err4, pad){
                db.query(`SELECT * FROM cpad LEFT JOIN liked ON cpad.id=liked.store_id WHERE user_id=? and type=?`, [request.session.email, 1], function(err5, cpad){
                db.query(`SELECT * FROM cup LEFT JOIN liked ON cup.id=liked.store_id WHERE user_id=? and type=?`, [request.session.email, 2], function(err6, cup){
                db.query(`SELECT * FROM tampon LEFT JOIN liked ON tampon.id=liked.store_id WHERE user_id=? and type=?`, [request.session.email, 3], function(err7, tampon){
                    var title = '마이페이지';
                    var head = `
                        <style>
                            table, td ,th {
                                border : 2px solid gray;
                                border-collapse : collapse;
                                padding : 15px;
                            }
                            a{
                                text-decoration: none; 
                                color : black;
                            }
                            a:hover{
                                text-decoration: none; 
                                color : gray;
                            }
                            .box{
                                float: left;
                                border: 1px solid black;
                                width: 20%; height: 25%;
                                margin: 2%;
                                text-align : center;
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
                                float : left;
                              }
                
                              #card #li:hover .card-body {
                                opacity: 1;
                                transform: translateY(-205px);
                              }
                
                              #card .card-body h6 {
                                color: #ffffff;
                                text-align: left;
                              }
                              .content{
                                display : flex;
                                justify-content : flex-start;
                                flex-wrap : wrap;
                                width: 80%; 
                              }
                              #button1{
                                width:fit-content;
                                display:block;
                                border : 0; 
                                outline : 0; 
                                background-color : #FFFFFF; 
                                margin: 0; 
                                text-align: center;
                                font-size : 15px;
                                width : 100%;
                              }

                              #button2{
                                padding: 0;
                                border: none;
                                background: none;
                              }
                        </style>
                    `;
                    var list_rec = '';
                    var list_com = '';
                    var list_req = '';
                    var list_store = '';
                    for(i=0; i < res1.length; i++) {
                        list_rec += `
                                <tr>
                                    <td>${i}</td>
                                    <td>
                                        ${res1[i].title}
                                    </td>
                                    <td>${res1[i].writer}</td>
                                    <td>${res1[i].date}</td>
                                    <td><a href="/mypage/page_rec/page/${res1[i].id}"><button id ="button1">수정하기</button></a></td>
                                </tr>
                        `;
                    }
                    for(i=0; i < com.length; i++) {
                        list_com += `
                                <tr>
                                    <td>${i}</td>
                                    <td>
                                        ${com[i].content}
                                    </td>
                                    <td>${com[i].writer}</td>
                                    <td>${com[i].date}</td>
                                    <td>
                                        <form action="/mypage/delete_com_process" method="post">
                                            <input type="hidden" name="id" value="${com[i].id}"/>
                                            <button type="submit" id ="button1" >삭제하기</button>
                                        </form>
                                    </td>
                                </tr>
                        `;
                    }
                    for(i=0; i < res2.length; i++) {
                        list_req += `
                                <tr>
                                    <td>${i}</td>
                                    <td>${res2[i].title}</td>
                                    <td>${res2[i].writer}</td>
                                    <td>${res2[i].date}</td>
                                    <td><a href="/mypage/page_req/page/${res2[i].id}"><button id ="button1">수정하기</button></a></td>
                                </tr>
                        `;
                    }
                    for(i = 0; i < pad.length; i++) {
                        list_store += `
                            <div class="box" >
                                <div id="card">
                                    <a href = "${pad[i].address}">
                                        <div id="li">
                                            <img src="${pad[i].image}" style= "position:absoulte; width:100%; height:100%;">
                                            <div class="card-body">
                                                <h6 class="card-text">제조사명<br>: ${pad[i].company}</h6><br>
                                                <h6 class="card-text">제품명<br>: ${pad[i].product}</h6>
                                                <form action="/mypage/like_process/pad" method="post">
                                                    <input type="hidden" name=id value='${pad[i].id}'/>
                                                    <button type="submit" id ="button2" ><img src='/images/heart.png'  width="25px" height="25px" alt="좋아요" ></button>
                                                </form>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                   
                        `;
                    }
                    for(i = 0; i < cpad.length; i++) {
                        list_store += `
                            <div class="box" >
                                <div id="card">
                                    <a href = "${cpad[i].address}">
                                        <div id="li">
                                            <img src="${cpad[i].image}" style= "position:absoulte; width:100%; height:100%;">
                                            <div class="card-body">
                                                <h6 class="card-text">제조사명<br>: ${cpad[i].company}</h6><br>
                                                <h6 class="card-text">제품명<br>: ${cpad[i].product}</h6>
                                                <form action="/mypage/like_process/cpad" method="post">
                                                    <input type="hidden" name=id value='${cpad[i].id}'/>
                                                    <button type="submit" id ="button2" ><img src='/images/heart.png'  width="25px" height="25px" alt="좋아요" ></button>
                                                </form>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                 
                        `;
                    }
                    for(i = 0; i < cup.length; i++) {
                        list_store += `
                            <div class="box" >
                                <div id="card">
                                    <a href = "${cup[i].address}">
                                        <div id="li">
                                            <img src="${cup[i].image}" style= "position:absoulte; width:100%; height:100%;">
                                            <div class="card-body">
                                                <h6 class="card-text">제조사명<br>: ${cup[i].company}</h6><br>
                                                <h6 class="card-text">제품명<br>: ${cup[i].product}</h6>
                                                <form action="/mypage/like_process/cup" method="post">
                                                    <input type="hidden" name=id value='${cup[i].id}'/>
                                                    <button type="submit" id ="button2" ><img src='/images/heart.png'  width="25px" height="25px" alt="좋아요" ></button>
                                                </form>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
 
                        `;
                    }
                    for(i = 0; i < tampon.length; i++) {
                        list_store += `
                            <div class="box" >
                                <div id="card">
                                    <a href = "${tampon[i].address}">
                                        <div id="li">
                                            <img src="${tampon[i].image}" style= "position:absoulte; width:100%; height:100%;">
                                            <div class="card-body">
                                                <h6 class="card-text">제조사명<br>: ${tampon[i].company}</h6><br>
                                                <h6 class="card-text">제품명<br>: ${tampon[i].product}</h6>
                                                <form action="/mypage/like_process/tampon" method="post">
                                                    <input type="hidden" name=id value='${tampon[i].id}'/>
                                                    <button type="submit" id ="button2"><img src='/images/heart.png'  width="25px" height="25px" alt="좋아요" ></button>
                                                </form>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                          
                        `;
                    }
                    var body = `
                        <main class="flex-shrink-0">
                        <div class="container">
                        <br>
                        <center>
                                <img src="images/mypage.png" align="center" width="200px">
                                <h1><b>${res0[0].nickname}의 MyPage</b></h1>
                                <h4>email : ${res0[0].email}</h4>
                                <h4>nickname : ${res0[0].nickname}</h4>
                            </div>
                        </center>
                        </div>
    
                        <div class = "container">
                            <center>
                                <table width = "80%">
                                <tr style = "background-color : #EEEEEE;">
                                    <img src="images/mypage2.png" style = "float:left; margin-left : 10%;" width="300px">

                                    <td width = "7"><b>No</b></td>
                                    <td width = "38%"><b>제목</b></td>
                                    <td width = "20%"><b>작성자</b></td>
                                    <td width = "22%"><b>작성일</b></td>
                                    <td width = "13%"><b>글수정</b></td>
                                  
                                </tr>
                                    ${list_rec}
                                </table>
                                <br><br>
                                <table width = "80%">
                                <tr style = "background-color : #EEEEEE;">
                                    <img src="images/mypage4.png" style = "float:left; margin-left : 10%;" width="300px">
                                    <td width = "7"><b>No</b></td>
                                    <td width = "38%"><b>제목</b></td>
                                    <td width = "20%"><b>작성자</b></td>
                                    <td width = "22%"><b>작성일</b></td>
                                    <td width = "13%"><b>댓글삭제</b></td>
                                  
                                </tr>
                                    ${list_com}
                                </table>
                                <br><br>
                                <img src="images/mypage3.png" style = "float:left; margin-left : 10%;"  width="380px">
                                <table width = "80%">
                                <tr style = "background-color : #EEEEEE;">
                                    <td width = "7"><b>No</b></td>
                                    <td width = "38%"><b>제목</b></td>
                                    <td width = "20%"><b>작성자</b></td>
                                    <td width = "22%"><b>작성일</b></td>
                                    <td width = "13%"><b>글수정</b></td>
                                </tr>
                                    ${list_req}
                                </table>
                                <br><br>
                                <img src="images/likelist.png" style = "float:left; margin-left : 10%;" width="180px">
                                <div class="content">
                                    ${list_store}
                                </div>
                            </div>
                            </center>
                            </div>
                        </main>
                    `;
                    var html = template.HTML(title, head, body, author.statusUI(request, response));
                    response.send(html);
                })
                })
                })
                })
            })})
        })
    })
});

module.exports = router;