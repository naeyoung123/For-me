var express = require('express');
const db = require('../../db.js');
var router = express.Router();
var template = require('../../lib/template.js');
var author = require('../../lib/author.js');
var path = require('path');

router.get('/store/cup/:listId', function (request, response) {
    db.query(`SELECT * FROM cup`, function(err, count){
        var cursor = path.parse(request.params.listId).base; // 현재페이지
        let list_size = 12; // 화면에서 보여줄 크기
        let bottom = 10; // 한번에 보이는 a태그 갯수
        let list_total = Math.ceil(count.length / list_size); // a태그 총 갯수
        let first = cursor - cursor % bottom + 1;
        let last = cursor - cursor % bottom + bottom;
        if(last > list_total) last = list_total;
        if (!cursor || cursor <= 0) 
            cursor = bottom
        if (!list_total || list_total<= 0) 
            list_total = bottom
        let offset = (cursor - 1) * list_size;
        let limit = cursor * list_size;

        db.query(`SELECT * FROM cup LIMIT ?, ?`, [offset, limit], function(err, res){
        var title = '월경컵';
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
                var company = res[i].company;
                var product = res[i].product;
                var address = res[i].address;
                var image = res[i].image;
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
                                        <form action="/store/like_process/cup" method="post">
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
            var paging = '';
            for(i = first; i < last + 1; i++){
                paging += `
                    <li class="page-item"><a class="page-link" href="/store/cup/${i}">${i}</a></li>
                `
            }  
                        
           var body = `
              <main class="flex-shrink-0">
                  <div class="container">
                      <div class="row">
                          <center> 
                              <img src='/images/cup.png' alt="월경컵" width = "750px">
                          </center>
                       </div>

                      <div class="content">  
                          ${list}
                      </div>
                      <br>
                      <center>
                      <div style= "text-align: center; display:inline-block;"> 
                            <ul class="pagination ">
                                <li class="page-item"><a class="page-link" href="/community/cup/${cursor-1}">Previous</a></li>
                                ${paging}
                                <li class="page-item"><a class="page-link" href="/community/cup/${cursor+1}">Next</a></li>
                            </ul>
                        </div>
                    </center>
                    <br>
                  </div>
              <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
              <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
              </main>
          `;
          var html = template.HTML(title, head, body, author.statusUI(request, response));
          response.send(html);
    })})
});

module.exports = router;