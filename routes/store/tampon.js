var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');

router.get('/store/tampon', function (request, response) {
    var title = '탐폰';
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
        ['유한킴벌리', '화이트 순면 탐폰 레귤러 16개 ', 'http://prod.danawa.com/info/?pcode=10105140&cate=17327492', 'http://img.danawa.com/prod_img/500000/140/105/img/10105140_1.jpg?shrink=330:330&_v=20191209161534'],
        ['유한킴벌리', '화이트 순면 탐폰 슈퍼 16개 ', 'http://prod.danawa.com/info/?pcode=10105353&cate=17327492', 'http://img.danawa.com/prod_img/500000/353/105/img/10105353_1.jpg?shrink=330:330&_v=20210604125657'],
        ['유한킴벌리', '화이트 순면 탐폰 슈퍼 8개 ', 'http://prod.danawa.com/info/?pcode=10770312&cate=17327492', 'http://img.danawa.com/prod_img/500000/312/770/img/10770312_1.jpg?shrink=330:330&_v=20200310140946'],
        ['유한킴벌리', '화이트 탐폰 레귤러 8개 ', 'http://prod.danawa.com/info/?pcode=2727273&cate=17327492', 'http://img.danawa.com/prod_img/500000/273/727/img/2727273_1.jpg?shrink=330:330&_v=20180731121459'],
        ['유한킴벌리', '화이트 순면 탐폰 레귤러 8개 ', 'http://prod.danawa.com/info/?pcode=10755435&cate=17327492', 'http://img.danawa.com/prod_img/500000/435/755/img/10755435_1.jpg?shrink=330:330&_v=20200309133205'],
        ['유한킴벌리', '화이트 탐폰 슈퍼 16개 ', 'http://prod.danawa.com/info/?pcode=2727342&cate=17327492', 'http://img.danawa.com/prod_img/500000/342/727/img/2727342_1.jpg?shrink=330:330&_v=20200925102004'],
        ['유한킴벌리', '화이트 탐폰 슈퍼 16개 x 2팩 + 레귤러 16개 ', 'http://prod.danawa.com/info/?pcode=5211407&cate=17327492', 'http://img.danawa.com/prod_img/500000/407/211/img/5211407_1.jpg?shrink=330:330&_v=20180731121459'],
        ['유한킴벌리', '화이트 스타일 탐폰 슈퍼 12개 ', 'http://prod.danawa.com/info/?pcode=5211266&cate=17327492', 'http://img.danawa.com/prod_img/500000/266/211/img/5211266_1.jpg?shrink=330:330&_v=20180731121829'],
        ['유한킴벌리', '화이트 스타일 탐폰 레귤러 12개 ', 'http://prod.danawa.com/info/?pcode=5211213&cate=17327492', 'http://img.danawa.com/prod_img/500000/266/211/img/5211266_1.jpg?shrink=330:330&_v=20180731121829'],
        ['유한킴벌리', '화이트 탐폰 오가닉 레귤러 8개 ', 'http://prod.danawa.com/info/?pcode=3822061&cate=17327492', 'http://img.danawa.com/prod_img/500000/061/822/img/3822061_1.jpg?shrink=330:330&_v=20180731121459'],
        ['유한킴벌리', '화이트 탐폰 레귤러 16개 ', 'http://prod.danawa.com/info/?pcode=2238154&cate=17327492', 'http://img.danawa.com/prod_img/500000/154/238/img/2238154_1.jpg?shrink=330:330&_v=20180731121459'],
        ['유한킴벌리', '화이트 탐폰 슈퍼 8개 ', 'http://prod.danawa.com/info/?pcode=2238113&cate=17327492', 'http://img.danawa.com/prod_img/500000/113/238/img/2238113_1.jpg?shrink=330:330&_v=20200928165446'],
        ['동아제약', '템포 NEW 오리지날 슈퍼 20개 ', 'http://prod.danawa.com/info/?pcode=8894774&cate=17327492', 'http://img.danawa.com/prod_img/500000/774/894/img/8894774_1.jpg?shrink=330:330&_v=20190730094248'],
        ['동아제약', '템포 NEW 오리지날 레귤러 20개 ', 'http://prod.danawa.com/info/?pcode=8896106&cate=17327492', 'http://img.danawa.com/prod_img/500000/106/896/img/8896106_1.jpg?shrink=330:330&_v=20190730101304'],
        ['동아제약', '템포 NEW 내추럴 슈퍼 16개 ', 'http://prod.danawa.com/info/?pcode=8823626&cate=17327492', 'http://img.danawa.com/prod_img/500000/626/823/img/8823626_1.jpg?shrink=330:330&_v=20190724172853'],
        ['동아제약', '템포 NEW 오리지날 레귤러 8개 ', 'http://prod.danawa.com/info/?pcode=8893634&cate=17327492', 'http://img.danawa.com/prod_img/500000/634/893/img/8893634_1.jpg?shrink=330:330&_v=20190730085946'],
        ['동아제약', '템포 NEW 오리지날 슈퍼 10개 ', 'http://prod.danawa.com/info/?pcode=9399777&cate=17327492', 'http://img.danawa.com/prod_img/500000/777/399/img/9399777_1.jpg?shrink=330:330&_v=20190830164711'],
        ['동아제약', '템포 NEW 오리지날 슈퍼 8개 ', 'http://prod.danawa.com/info/?pcode=8893700&cate=17327492', 'http://img.danawa.com/prod_img/500000/700/893/img/8893700_1.jpg?shrink=330:330&_v=20190730090748'],
        ['동아제약', '템포 내추럴 슈퍼 16개 ', 'http://prod.danawa.com/info/?pcode=5688011&cate=17327492', 'http://img.danawa.com/prod_img/500000/011/688/img/5688011_1.jpg?shrink=330:330&_v=20190725141321'],
        ['동아제약', '템포 에코 내추럴 레귤러 16개 ', 'http://prod.danawa.com/info/?pcode=3836463&cate=17327492', 'http://img.danawa.com/prod_img/500000/463/836/img/3836463_1.jpg?shrink=330:330&_v=20171129144819'],
        ['동아제약', '템포 NEW 오리지날 레귤러 10개 ', 'http://prod.danawa.com/info/?pcode=9399390&cate=17327492', 'http://img.danawa.com/prod_img/500000/390/399/img/9399390_1.jpg?shrink=330:330&_v=20190830163441'],
        ['동아제약', '템포 NEW 내추럴 레귤러 16개 ', 'http://prod.danawa.com/info/?pcode=8832434&cate=17327492', 'http://img.danawa.com/prod_img/500000/434/832/img/8832434_1.jpg?shrink=330:330&_v=20190725120009'],
        ['동아제약', '템포 슈퍼 10개 ', 'http://prod.danawa.com/info/?pcode=2124442&cate=17327492', 'http://img.danawa.com/prod_img/500000/442/124/img/2124442_1.jpg?shrink=330:330&_v=20211125150811'],
        ['동아제약', '템포 내추럴 슈퍼 16개 x 2팩 + 레귤러 16개 ', 'http://prod.danawa.com/info/?pcode=5688019&cate=17327492', 'http://img.danawa.com/prod_img/500000/019/688/img/5688019_1.jpg?shrink=330:330&_v=20190725141348'],
        ['동아제약', '템포 레귤라 20개 ', 'http://prod.danawa.com/info/?pcode=819232&cate=17327492', 'http://img.danawa.com/prod_img/500000/232/819/img/819232_1.jpg?shrink=330:330&_v=20211125150820'],
        ['P&G', '위스퍼 탐팩스 펄 슈퍼 18개 ', 'http://prod.danawa.com/info/?pcode=5231953&cate=17327492', 'http://img.danawa.com/prod_img/500000/953/231/img/5231953_1.jpg?shrink=330:330&_v=20170614135419'],
        ['바디와이즈', '나트라케어 코튼 탐폰 레귤러 16개', 'http://prod.danawa.com/info/?pcode=817990&cate=17327492', 'http://img.danawa.com/prod_img/500000/990/817/img/817990_1.jpg?shrink=330:330&_v=20170901171246']
    ];

    var list = ' ';
    for (var i = 0; i < data.length; i++) {
        var company = data[i][0];
        var product = data[i][1];
        var address = data[i][2];
        var image = data[i][3];
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
                    <img src='/images/tampon.png' alt="탐폰" width = "750px">
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
});

module.exports = router;