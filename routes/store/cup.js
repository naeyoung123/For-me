var express = require('express');
const db = require('../../db.js');
var router = express.Router();
var template = require('../../lib/template.js');

router.get('/store/cup', function (request, response) {
    db.query(`SELECT * FROM cup`, function(err, res){
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
    </style>`;

    var data = [
        ['LENA', 'LENA 레나컵 L', 'http://prod.danawa.com/info/?pcode=5436981&cate=17327493', 'http://img.danawa.com/prod_img/500000/981/436/img/5436981_1.jpg?shrink=330:330&_v=20211125151724'],
        ['LENA', 'LENA 레나컵 S', 'http://prod.danawa.com/info/?pcode=5436937&cate=17327493', 'http://img.danawa.com/prod_img/500000/937/436/img/5436937_1.jpg?shrink=330:330&_v=20211125151724'],
        ['Diva International', 'Diva International 디바컵 모델2 ', 'http://prod.danawa.com/info/?pcode=9929262&cate=17327493', 'http://img.danawa.com/prod_img/500000/262/929/img/9929262_1.jpg?shrink=330:330&_v=20200925162429'],
        ['Diva International', 'Diva International 디바컵 모델1 (해외구매) ', 'http://prod.danawa.com/info/?pcode=5440536&cate=17327493', 'http://img.danawa.com/prod_img/500000/536/440/img/5440536_1.jpg?shrink=330:330&_v=20180320180134'],
        ['Diva International', 'Diva International 디바컵 모델1 ', 'http://prod.danawa.com/info/?pcode=9929241&cate=17327493#bookmark_price_compare', 'http://img.danawa.com/prod_img/500000/241/929/img/9929241_1.jpg?shrink=330:330&_v=20191115165226'],
        ['Diva International', 'Diva International 디바컵 모델0 ', 'http://prod.danawa.com/info/?pcode=9929211&cate=17327493', 'http://img.danawa.com/prod_img/500000/211/929/img/9929211_1.jpg?shrink=330:330&_v=20191115165202'],
        ['Diva International', 'Diva International 디바컵 3개 세트 ', 'http://prod.danawa.com/info/?pcode=9929445&cate=17327493', 'http://img.danawa.com/prod_img/500000/445/929/img/9929445_1.jpg?shrink=330:330&_v=20200918164449'],
        ['JUJU', 'JUJU 주주컵 모델4 ', 'http://prod.danawa.com/info/?pcode=14033465&cate=17327493', 'http://img.danawa.com/prod_img/500000/465/033/img/14033465_1.jpg?shrink=330:330&_v=20210428135232'],
        ['JUJU', 'JUJU 주주컵 모델3 ', 'http://prod.danawa.com/info/?pcode=14033444&cate=17327493', 'http://img.danawa.com/prod_img/500000/444/033/img/14033444_1.jpg?shrink=330:330&_v=20210428135220'],
        ['JUJU', 'JUJU 주주컵 모델2 ', 'http://prod.danawa.com/info/?pcode=14033423&cate=17327493', 'http://img.danawa.com/prod_img/500000/423/033/img/14033423_1.jpg?shrink=330:330&_v=20210428135153'],
        ['JUJU', 'JUJU 주주컵 모델1 ', 'http://prod.danawa.com/info/?pcode=14033381&cate=17327493', 'http://img.danawa.com/prod_img/500000/381/033/img/14033381_1.jpg?shrink=330:330&_v=20210428135204'],
        ['한나패드', '한나패드 한나컵 M ', 'http://prod.danawa.com/info/?pcode=9719223&cate=17327493', 'http://img.danawa.com/prod_img/500000/223/719/img/9719223_1.jpg?shrink=330:330&_v=20211125145916'],
        ['한나패드', '한나패드 한나컵 S ', 'http://prod.danawa.com/info/?pcode=9719097&cate=17327493', 'http://img.danawa.com/prod_img/500000/097/719/img/9719097_1.jpg?shrink=330:330&_v=20211125145916'],
        ['신성실리콘', '신성실리콘 티읕컵 L ', 'http://prod.danawa.com/info/?pcode=14197232&cate=17327493', 'http://img.danawa.com/prod_img/500000/232/197/img/14197232_1.jpg?shrink=330:330&_v=20210514172246'],
        ['신성실리콘', '신성실리콘 티읕컵 S ', 'http://prod.danawa.com/info/?pcode=14197220&cate=17327493', 'http://img.danawa.com/prod_img/500000/220/197/img/14197220_1.jpg?shrink=330:330&_v=20210514172228'],
        ['Lunette', 'Lunette 루넷컵 2사이즈 (해외구매) ', 'http://prod.danawa.com/info/?pcode=10166871&cate=17327493', 'http://img.danawa.com/prod_img/500000/871/166/img/10166871_1.jpg?shrink=330:330&_v=20211125145644'],
        ['Lunette', 'Lunette 루넷컵 1사이즈 (해외구매) ', 'http://prod.danawa.com/info/?pcode=10166751&cate=17327493', 'http://img.danawa.com/prod_img/500000/751/166/img/10166751_1.jpg?shrink=330:330&_v=20211125145644']
    ];
        
            var list = ' ';
            for (var i = 0; i < res.length; i++) {
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
                              <img src='/images/cup.png' alt="월경컵" width = "750px">
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
          var html = template.HTML(title, head, body);
          response.send(html);
    })
});

module.exports = router;