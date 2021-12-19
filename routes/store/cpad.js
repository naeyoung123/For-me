var express = require('express');
const db = require('../../db.js');
var router = express.Router();
var template = require('../../lib/template.js');

router.get('/store/cpad', function (request, response) {
    db.query(`SELECT * FROM cpad`, function(err, res){
        var title = '면 월경대';
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
        ['아임오', '아임오 면생리대 라이너 2개입', 'http://prod.danawa.com/info/?pcode=13099532&cate=17327490', 'http://img.danawa.com/prod_img/500000/532/099/img/13099532_1.jpg?shrink=330:330&_v=20210108154527'],
        ['아임오', '아임오 면생리대 중형', 'http://prod.danawa.com/info/?pcode=13091975&cate=17327490', 'http://img.danawa.com/prod_img/500000/975/091/img/13091975_1.jpg?shrink=330:330&_v=20210107175140'],
        ['아임오', '아임오 면생리대 오버나이트', 'http://prod.danawa.com/info/?pcode=13092089&cate=17327490', 'http://img.danawa.com/prod_img/500000/089/092/img/13092089_1.jpg?shrink=330:330&_v=20210107175732'],
        ['아이에코', '아이에코 면생리대 소형 1개 ', 'http://prod.danawa.com/info/?pcode=5444386&cate=17327490', 'http://img.danawa.com/prod_img/500000/386/444/img/5444386_1.jpg?shrink=330:330&_v=20211125151506'],
        ['아이에코', '아이에코 면생리대 팬티라이너 1개 ', 'http://prod.danawa.com/info/?pcode=6242861&cate=17327490', 'http://img.danawa.com/prod_img/500000/861/242/img/6242861_1.jpg?shrink=330:330&_v=20211125151505'],
        ['아이에코', '아이에코 면생리대 대형 1개', 'http://prod.danawa.com/info/?pcode=5444459&cate=17327490', 'http://img.danawa.com/prod_img/500000/459/444/img/5444459_1.jpg?shrink=330:330&_v=20211125151506'],
        ['아이에코', '아이에코 면생리대 15개 세트', 'http://prod.danawa.com/info/?pcode=5444826&cate=17327490', 'http://img.danawa.com/prod_img/500000/826/444/img/5444826_1.jpg?shrink=330:330&_v=20211125151505'],
        ['아이에코', '아이에코 면생리대 7개 세트 ', 'http://prod.danawa.com/info/?pcode=5444767&cate=17327490', 'http://img.danawa.com/prod_img/500000/767/444/img/5444767_1.jpg?shrink=330:330&_v=20211125151506'],
        ['아이에코', '아이에코 면생리대 중형 1개', 'http://prod.danawa.com/info/?pcode=5444734&cate=17327490', 'http://img.danawa.com/prod_img/500000/734/444/img/5444734_1.jpg?shrink=330:330&_v=20211125151505'],
        ['아이에코', '아이에코 면생리대 왕비형 선물세트', 'http://prod.danawa.com/info/?pcode=5444642&cate=17327490', 'http://img.danawa.com/prod_img/500000/642/444/img/5444642_1.jpg?shrink=330:330&_v=20211125151506'],
        ['아이에코', '아이에코 i참고은 면생리대 열매형 1개', 'http://prod.danawa.com/info/?pcode=2605264&cate=17327490', 'http://img.danawa.com/prod_img/500000/264/605/img/2605264_1.jpg?shrink=330:330&_v=20211125151506'],
        ['달이슬', '달이슬 초소형 팬티라이너 황토 1개 ', 'http://prod.danawa.com/info/?pcode=5447123&cate=17327490', 'http://img.danawa.com/prod_img/500000/123/447/img/5447123_1.jpg?shrink=330:330&_v=20200331130019'],
        ['달이슬', '달이슬 초소형 팬티라이너 참숯 1개 ', 'http://prod.danawa.com/info/?pcode=9667179&cate=17327490', 'http://img.danawa.com/prod_img/500000/179/667/img/9667179_1.jpg?shrink=330:330&_v=20200331130019'],
        ['코든퍼블릭', '코튼리퍼블릭 면생리대 힐링타임 12개 세트 ', 'http://prod.danawa.com/info/?pcode=6391690&cate=17327490', 'http://img.danawa.com/prod_img/500000/690/391/img/6391690_1.jpg?shrink=330:330&_v=20200401131702'],
        ['코든퍼블릭', '코튼리퍼블릭 유기농커버 에이프릴 12개 세트 ', 'http://prod.danawa.com/info/?pcode=6391630&cate=17327490', 'http://img.danawa.com/prod_img/500000/630/391/img/6391630_1.jpg?shrink=330:330&_v=20200331132941'],
        ['코든퍼블릭', '코튼리퍼블릭 유기농커버 에이프릴 시작 6개 세트 ', 'http://prod.danawa.com/info/?pcode=6391492&cate=17327490', 'http://img.danawa.com/prod_img/500000/492/391/img/6391492_1.jpg?shrink=330:330&_v=20200331132941'],
        ['코든퍼블릭', '코튼리퍼블릭 유기농커버 에이프릴 오버나이트 3개 세트 ', 'http://prod.danawa.com/info/?pcode=6391492&cate=17327490', 'http://img.danawa.com/prod_img/500000/482/391/img/6391482_1.jpg?shrink=330:330&_v=20200331132941'],
        ['코든퍼블릭', '코튼리퍼블릭 프리미엄 면생리대 알레즈 12개 세트 ', 'http://prod.danawa.com/info/?pcode=6391382&cate=17327490', 'http://img.danawa.com/prod_img/500000/382/391/img/6391382_1.jpg?shrink=330:330&_v=20200331124715'],
        ['코든퍼블릭', '코튼리퍼블릭 365유기농면 데이라이너 5개 세트 ', 'http://prod.danawa.com/info/?pcode=6381967&cate=17327490', 'http://img.danawa.com/prod_img/500000/967/381/img/6381967_1.jpg?shrink=330:330&_v=20200406130133'],
        ['코든퍼블릭', '코튼리퍼블릭 면생리대 아덴트러브 12개 세트 ', 'http://prod.danawa.com/info/?pcode=6381936&cate=17327490', 'http://img.danawa.com/prod_img/500000/936/381/img/6381936_1.jpg?shrink=330:330&_v=20200401133351'],
        ['코든퍼블릭', '코튼리퍼블릭 면생리대 아덴트러브 시작 6개 세트 ', 'http://prod.danawa.com/info/?pcode=6381911&cate=17327490', 'http://img.danawa.com/prod_img/500000/911/381/img/6381911_1.jpg?shrink=330:330&_v=20200401133346'],
        ['코든퍼블릭', '코튼리퍼블릭 면생리대 아덴트러브 체험 6개 세트 ', 'http://prod.danawa.com/info/?pcode=6381891&cate=17327490', 'http://img.danawa.com/prod_img/500000/891/381/img/6381891_1.jpg?shrink=330:330&_v=20200401133342'],
        ['코든퍼블릭', '코튼리퍼블릭 프리미엄 면생리대 버터플라이 12개 세트 ', 'http://prod.danawa.com/info/?pcode=6381836&cate=17327490', 'http://img.danawa.com/prod_img/500000/836/381/img/6381836_1.jpg?shrink=330:330&_v=20200331125500'],
        ['코든퍼블릭', '코튼리퍼블릭 유기농커버 에이프릴 대형 3개 세트 ', 'http://prod.danawa.com/info/?pcode=6098737&cate=17327490', 'http://img.danawa.com/prod_img/500000/737/098/img/6098737_1.jpg?shrink=330:330&_v=20200331132941'],
        ['코든퍼블릭', '코튼리퍼블릭 유기농커버 에이프릴 중형 3개 세트 ', 'http://prod.danawa.com/info/?pcode=6098722&cate=17327490', 'http://img.danawa.com/prod_img/500000/722/098/img/6098722_1.jpg?shrink=330:330&_v=20200331132941'],
        ['코든퍼블릭', '코튼리퍼블릭 유기농커버 에이프릴 소형 3개 세트 ', 'http://prod.danawa.com/info/?pcode=6098687&cate=17327490', 'http://img.danawa.com/prod_img/500000/687/098/img/6098687_1.jpg?shrink=330:330&_v=20200331132941'],
        ['코든퍼블릭', '코튼리퍼블릭 프리미엄 면생리대 버터플라이 대형 3개 ', 'http://prod.danawa.com/info/?pcode=6098492&cate=17327490', 'http://img.danawa.com/prod_img/500000/492/098/img/6098492_1.jpg?shrink=330:330&_v=20200331125500'],
        ['코든퍼블릭', ' 코튼리퍼블릭 프리미엄 면생리대 버터플라이 중형 3개 ', 'http://prod.danawa.com/info/?pcode=6098465&cate=17327490', 'http://img.danawa.com/prod_img/500000/465/098/img/6098465_1.jpg?shrink=330:330&_v=20200331125500'],
        ['코든퍼블릭', '코튼리퍼블릭 프리미엄 면생리대 알레즈 오버나이트 3개 세트 ', 'http://prod.danawa.com/info/?pcode=6098336&cate=17327490', 'http://img.danawa.com/prod_img/500000/336/098/img/6098336_1.jpg?shrink=330:330&_v=20200331124715'],
        ['코든퍼블릭', '코튼리퍼블릭 프리미엄 면생리대 알레즈 대형 3개 세트 ', 'http://prod.danawa.com/info/?pcode=6098317&cate=17327490', 'http://img.danawa.com/prod_img/500000/317/098/img/6098317_1.jpg?shrink=330:330&_v=20200331124715'],
        ['코든퍼블릭', '코튼리퍼블릭 프리미엄 면생리대 알레즈 중형 3개 세트', 'http://prod.danawa.com/info/?pcode=6098304&cate=17327490', 'http://img.danawa.com/prod_img/500000/304/098/img/6098304_1.jpg?shrink=330:330&_v=20200331124715'],
        ['코든퍼블릭', '코튼리퍼블릭 프리미엄 면생리대 알레즈 소형 3개 세트 ', 'http://prod.danawa.com/info/?pcode=6098291&cate=17327490', 'http://img.danawa.com/prod_img/500000/291/098/img/6098291_1.jpg?shrink=330:330&_v=20200331124715'],
        ['코든퍼블릭', '코튼리퍼블릭 면생리대 힐링타임 오버나이트 3개 세트', 'http://prod.danawa.com/info/?pcode=6098245&cate=17327490', 'http://img.danawa.com/prod_img/500000/245/098/img/6098245_1.jpg?shrink=330:330&_v=20200401131702'],
        ['코든퍼블릭', '코튼리퍼블릭 면생리대 힐링타임 대형 3개 세트 ', 'http://prod.danawa.com/info/?pcode=6098228&cate=17327490', 'http://img.danawa.com/prod_img/500000/228/098/img/6098228_1.jpg?shrink=330:330&_v=20200401131702']
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
                                <img src='/images/cpad.png' alt="면 월경대" width = "750px">
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