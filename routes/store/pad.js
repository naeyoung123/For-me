var express = require('express');
const db = require('../../db.js');
var router = express.Router();
var template = require('../../lib/template.js');
var author = require('../../lib/author.js');

router.get('/store/pad', function (request, response) {
    db.query(`SELECT * FROM pad`, function(err, res){
        var title = '일회용 월경컵';
        var head = `
        <style>
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
                width: 100%; 
                height: 850px;
            }
            button{
                padding: 0;
                border: none;
                background: none;
            }
        </style>`;
        
            var list = ' ';
            for (var i = 0; i < res.length; i++) {
                var id = res[i].id;
                var company = res[i].company;
                var product = res[i].brand + ' ' + res[i].product;
                var address = res[i].address;
                var image = res[i].image;
                list += `
                    <div class="box">
                        <div id="card">
                            <a href = "${address}">
                                <div id="li">
                                    <img src="${image}" style= "position:absoulte; width:100%; height:100%;">
                                    <div class="card-body">
                                        <h5 class="card-text">제조사명<br>: ${company}</h5><br>
                                        <h5 class="card-text">제품명<br>: ${product}</h5>
                                        <form action="/store/like_process/pad" method="post">
                                            <input type="hidden" name=id value='${id}'/>
                                            <button type="submit" ><img src='/images/heart.png'  width="25px" height="25px" alt="좋아요" ></button>
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
            <div class="row">
                <center> 
                    <img src='/images/pad.png' alt="일회용 월경컵" width = "750px">
                </center>
             </div>
        
            <div class="content">  
                ${list}
            </div>
            
            <div style= "text-align: center; display:inline-block;"> 
			    <ul class="pagination ">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </div>
        </div>
		<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
    </main>
`;
    var html = template.HTML(title, head, body, author.statusUI(request, response));
    response.send(html);
    })
});

module.exports = router;