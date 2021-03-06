var express = require('express');
const db = require('../../db.js');
var router = express.Router();
var template = require('../../lib/template.js');
var author = require('../../lib/author.js');

router.get('/prod_rec/qna', function (request, response) {
    var title = 'For me 나를 위해';
    var head = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">

    <style>

    body{
      background-color: lavender;
  }
  
  #qna{
      display: none;
  }
  
  .qBox{
      background-color: ivory;
      text-align: center;
      border-radius: 20px;
      font-size: 24px;
      width: 80%;
  }
  
  .answerList{
      background-color: ivory;
      border-radius: 20px;
      display: block;
      width: 80%;
      border: 0px;
      font-size: 20px;
  }
  
  .answerList:hover, .answerList:focus{
      background-color: rgb(98, 0, 128);
      color: ivory;
  }
  
  
  .status{
      height: 20px;
      width: 80%;
      background-color: ivory;
      border-radius: 20px;
  }
  
  .statusBar{
      height: 100%;
      border-radius: 20px;
      background-color: purple;
  }
  
  #result{
      display: none;
      background-color: lavender;
      width: 80%;
      text-align: center;
      border-radius: 20px;
  }
  
  
  .resultname{
      font-size: 26px;
    }
    
    .resultDesc{
      font-size: 20px;
    }
  
    
    .gohome:hover, .gohome:focus {
      background-color: whitesmoke;
      color: pink;
    }
    

    </style>
    `;
    var body = `
    <main class="flex-shrink-0">
    <div class="container">
        <div class="container">
            <section id="main" class="mx-auto my-5 py-5 px-3">
              <h1>나에게 딱맞는 월경용품 찾기</h1>
              <div class="col-lg-6 col-md-8 col-sm-10 col-12 mx-auto">
                <img src="/images/main2.png" alt="mainImage" class="img-fluid">
              </div>
              <button type="button" class="btn btn-outline-danger mt-3" 
              onclick="js:begin()">시작하기</button>
            </section>
            <section id="qna">
                <div class="status mx-auto mt-5">
                    <div class="statusBar">
                    </div>
                </div>
                <div class="qBox my-5 py-3 mx-auto">
                </div>
                <div class="answerBox">
                </div>
            </section>
            <section id="result">
              <h1>나에게 딱맞는 월경용품 찾기 결과는? </h1>
              <div class="resultname">
              
              </div>
              <div id="resultImg" class="col-mx-auto">
              
              </div>
              <div class="resultDesc">
              
              </div>
              <button type="button">공유하기</button>
            </section>
            <script src="./question.js" charset="utf-8"></script>
            <script src="./start.js" charset="utf-8"></script>
          </div>
    </body>
    </div>

   
    </main>`;

  var html = template.HTML(title, head, body, author.statusUI(request, response));
  response.send(html);
});

module.exports = router;