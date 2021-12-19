var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');

router.get('/store/pad', function (request, response) {
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

    </style>`;

    var data = [
        ['유한킴벌리', '좋은느낌 순수 울트라 날개 중형 18개 ', 'http://prod.danawa.com/info/?pcode=5685316&cate=17227477', 'http://img.danawa.com/prod_img/500000/316/685/img/5685316_1.jpg?shrink=330:330&_v=20190617161617'],
        ['유한킴벌리', '화이트 입는 오버나이트 대형 8개 ', 'http://prod.danawa.com/info/?pcode=3822650&cate=17227477', 'http://img.danawa.com/prod_img/500000/650/822/img/3822650_1.jpg?shrink=330:330&_v=20180730174108'],
        ['유한킴벌리', '좋은느낌 입는 오버나이트 중형 8개 ', 'http://prod.danawa.com/info/?pcode=6368014&cate=17227477', 'http://img.danawa.com/prod_img/500000/014/368/img/6368014_1.jpg?shrink=330:330&_v=20180807142145'],
        ['유한킴벌리', '화이트 시크릿홀 울트라슬림 날개 대형 17개 ', 'http://prod.danawa.com/info/?pcode=5969593&cate=17227477', 'http://img.danawa.com/prod_img/500000/593/969/img/5969593_1.jpg?shrink=330:330&_v=20180801165723'],
        ['유한킴벌리', '좋은느낌 매직쿠션 울트라슬림 날개 대형 17개 ', 'http://prod.danawa.com/info/?pcode=6307900&cate=17227477', 'http://img.danawa.com/prod_img/500000/900/307/img/6307900_1.jpg?shrink=330:330&_v=20180810161056'],
        ['유한킴벌리', '라네이처 시그니처 울트라슬림 중형 12개 ', 'http://prod.danawa.com/info/?pcode=9928947&cate=17227477', 'http://img.danawa.com/prod_img/500000/947/928/img/9928947_1.jpg?shrink=330:330&_v=20201208151306'],
        ['유한킴벌리', '좋은느낌 유기농 순면커버 울트라슬림 날개 소형 18개 ', 'http://prod.danawa.com/info/?pcode=6343939&cate=17227477', 'http://img.danawa.com/prod_img/500000/939/343/img/6343939_1.jpg?shrink=330:330&_v=20200915164437'],
        ['유한킴벌리', '좋은느낌 유기농 순면커버 데일리 라이너 롱 36개', 'http://prod.danawa.com/info/?pcode=6191264&cate=17227477', 'http://img.danawa.com/prod_img/500000/264/191/img/6191264_1.jpg?shrink=330:330&_v=20200911164847'],
        ['유한킴벌리', '좋은느낌 유기농 순면커버 울트라슬림 날개 중형 18개', 'http://prod.danawa.com/info/?pcode=6344073&cate=17227477', 'http://img.danawa.com/prod_img/500000/073/344/img/6344073_1.jpg?shrink=330:330&_v=20201203150515'],
        ['유한킴벌리', '좋은느낌 유기농 순면커버 데일리 라이너 일반 40개 ', 'http://prod.danawa.com/info/?pcode=6376687&cate=17227477', 'http://img.danawa.com/prod_img/500000/687/376/img/6376687_1.jpg?shrink=330:330&_v=20200917163016'],
        ['유한킴벌리', '화이트 시크릿홀 울트라슬림 날개 중형 19개 ', 'http://prod.danawa.com/info/?pcode=6648364&cate=17227477', 'http://img.danawa.com/prod_img/500000/364/648/img/6648364_1.jpg?shrink=330:330&_v=20181116164947'],
        ['유한킴벌리', '좋은느낌 입는 오버나이트 대형 8개', 'http://prod.danawa.com/info/?pcode=6387835&cate=17227477', 'http://img.danawa.com/prod_img/500000/835/387/img/6387835_1.jpg?shrink=330:330&_v=20180816121303'],
        ['유한킴벌리', '좋은느낌 유기농 순면커버 울트라슬림 날개 대형 16개 ', 'http://prod.danawa.com/info/?pcode=6379126&cate=17227477', 'http://img.danawa.com/prod_img/500000/126/379/img/6379126_1.jpg?shrink=330:330&_v=20200914171229'],
        ['유한킴벌리', '좋은느낌 좋은순면 에어핏쿠션 팬티라이너 롱 36개', 'http://prod.danawa.com/info/?pcode=6193983&cate=17227477', 'http://img.danawa.com/prod_img/500000/983/193/img/6193983_1.jpg?shrink=330:330&_v=20200914161743'],
        ['유한킴벌리', '좋은느낌 좋은순면 에어핏 슬림 수퍼롱 오버나이트 8개', 'http://prod.danawa.com/info/?pcode=5941672&cate=17227477', 'http://img.danawa.com/prod_img/500000/672/941/img/5941672_1.jpg?shrink=330:330&_v=20190530140352'],
        ['유한킴벌리', '좋은느낌 유기농 순면커버 맥시슬림 대형 32개', 'http://prod.danawa.com/info/?pcode=6340446&cate=17227477', 'http://img.danawa.com/prod_img/500000/446/340/img/6340446_1.jpg?shrink=330:330&_v=20201203152357'],
        ['유한킴벌리', '좋은느낌 매직쿠션 울트라슬림 날개 중형 19개', 'http://prod.danawa.com/info/?pcode=5954331&cate=17227477', 'http://img.danawa.com/prod_img/500000/331/954/img/5954331_1.jpg?shrink=330:330&_v=20200113143924'],
        ['유한킴벌리', '좋은느낌 울트라 날개 오버나이트 14개 ', 'http://prod.danawa.com/info/?pcode=3802024&cate=17227477', 'http://img.danawa.com/prod_img/500000/024/802/img/3802024_1.jpg?shrink=330:330&_v=20180730172845'],
        ['유한킴벌리', '좋은느낌 유기농 순면커버 입는 오버나이트 팬티형 중형 8개 ', 'http://prod.danawa.com/info/?pcode=6200310&cate=17227477', 'http://img.danawa.com/prod_img/500000/310/200/img/6200310_1.jpg?shrink=330:330&_v=20201203151047'],
        ['유한킴벌리', '화이트 시크릿홀 울트라슬림 날개 중형 48개 ', 'http://prod.danawa.com/info/?pcode=5966550&cate=17227477', 'http://img.danawa.com/prod_img/500000/550/966/img/5966550_1.jpg?shrink=330:330&_v=20180801173004'],
        ['LG유니참', '쏘피 바디피트 볼록맞춤 울트라 날개 중형 16개 ', 'http://prod.danawa.com/info/?pcode=6396310&cate=17227477', 'http://img.danawa.com/prod_img/500000/310/396/img/6396310_1.jpg?shrink=330:330&_v=20200915161620'],
        ['LG유니참', '쏘피 바디피트 볼록맞춤 안심숙면 420 슈퍼롱 20개 ', 'http://prod.danawa.com/info/?pcode=5890016&cate=17227477', 'http://img.danawa.com/prod_img/500000/016/890/img/5890016_1.jpg?shrink=330:330&_v=20211112144856'],
        ['LG유니참', '쏘피 한결 안심숙면 420 슈퍼롱 오버나이트 20개 ', 'http://prod.danawa.com/info/?pcode=5877046&cate=17227477', 'http://img.danawa.com/prod_img/500000/046/877/img/5877046_1.jpg?shrink=330:330&_v=20200914170457'],
        ['LG유니참', '쏘피 안심숙면팬티 M 5개 ', 'http://prod.danawa.com/info/?pcode=9753156&cate=17227477', 'http://img.danawa.com/prod_img/500000/156/753/img/9753156_1.jpg?shrink=330:330&_v=20200914172111'],
        ['LG유니참', '쏘피 바디피트 순간흡수 대형 16개 ', 'http://prod.danawa.com/info/?pcode=5651186&cate=17227477', 'http://img.danawa.com/prod_img/500000/186/651/img/5651186_1.jpg?shrink=330:330&_v=20180219153055'],
        ['LG유니참', '쏘피 바디피트 유기농 100% 순면커버 울트라 날개 중형 20개 ', 'http://prod.danawa.com/info/?pcode=5907482&cate=17227477', 'http://img.danawa.com/prod_img/500000/482/907/img/5907482_1.jpg?shrink=330:330&_v=20200915163359'],
        ['LG유니참', '쏘피 바디피트 천연코튼 팬티라이너 일반 라벤더향 40개 ', 'http://prod.danawa.com/info/?pcode=5888664&cate=17227477', 'http://img.danawa.com/prod_img/500000/664/888/img/5888664_1.jpg?shrink=330:330&_v=20180212152057'],
        ['LG유니참', '쏘피 바디피트 귀애랑 울트라 날개 대형 18개 ', 'http://prod.danawa.com/info/?pcode=1651267&cate=17227477', 'http://img.danawa.com/prod_img/500000/267/651/img/1651267_1.jpg?shrink=330:330&_v=20180220145402'],
        ['LG유니참', '쏘피 바디피트 순간흡수 안심숙면 330 오버나이트 12개 ', 'http://prod.danawa.com/info/?pcode=5898432&cate=17227477', 'http://img.danawa.com/prod_img/500000/432/898/img/5898432_1.jpg?shrink=330:330&_v=20200915170727'],
        ['LG유니참', '쏘피 바디피트 볼록맞춤 안심숙면 330 오버나이트 12개', 'http://prod.danawa.com/info/?pcode=5889865&cate=17227477', 'http://img.danawa.com/prod_img/500000/865/889/img/5889865_1.jpg?shrink=330:330&_v=20200914161935'],
        ['LG유니참', '쏘피 내 몸에 순한면 유기농 무표백 속커버 중형 18개', 'http://prod.danawa.com/info/?pcode=15838997&cate=17227477', 'http://img.danawa.com/prod_img/500000/997/838/img/15838997_1.jpg?shrink=330:330&_v=20211202125416'],
        ['LG유니참', '쏘피 바디피트 귀애랑 안심숙면 420 슈퍼롱 20개 ', 'http://prod.danawa.com/info/?pcode=5883100&cate=17227477', 'http://img.danawa.com/prod_img/500000/100/883/img/5883100_1.jpg?shrink=330:330&_v=20200914162210'],
        ['LG유니참', '쏘피 바디피트 쿨링 프레쉬 날개 대형 16개 ', 'http://prod.danawa.com/info/?pcode=11475642&cate=17227477', 'http://img.danawa.com/prod_img/500000/642/475/img/11475642_1.jpg?shrink=330:330&_v=20200604130307'],
        ['LG유니참', '쏘피 한결 울트라 날개 중형 16개 ', 'http://prod.danawa.com/info/?pcode=5880632&cate=17227477', 'http://img.danawa.com/prod_img/500000/632/880/img/5880632_1.jpg?shrink=330:330&_v=20180212155627'],
        ['LG유니참', '쏘피 바디피트 볼록맞춤 안심숙면 420 슈퍼롱 10개 ', 'http://prod.danawa.com/info/?pcode=10224252&cate=17227477', 'http://img.danawa.com/prod_img/500000/252/224/img/10224252_1.jpg?shrink=330:330&_v=20211115120826'],
        ['LG유니참', '쏘피 바디피트 쿨링 프레쉬 날개 중형 20개 ', 'http://prod.danawa.com/info/?pcode=11475135&cate=17227477', 'http://img.danawa.com/prod_img/500000/135/475/img/11475135_1.jpg?shrink=330:330&_v=20200604124742'],
        ['LG유니참', '쏘피 안심숙면팬티 L 5개', 'http://prod.danawa.com/info/?pcode=9318141&cate=17227477', 'http://img.danawa.com/prod_img/500000/141/318/img/9318141_1.jpg?shrink=330:330&_v=20200915162813'],
        ['LG유니참', '쏘피 바디피트 유기농 순면 생리대 대형 14개 ', 'http://prod.danawa.com/info/?pcode=15424256&cate=17227477', 'http://img.danawa.com/prod_img/500000/256/424/img/15424256_1.jpg?shrink=330:330&_v=20211013150433'],
        ['LG유니참', '쏘피 바디피트 귀애랑 울트라 날개 중형 20개 ', 'http://prod.danawa.com/info/?pcode=2890227&cate=17227477', 'http://img.danawa.com/prod_img/500000/227/890/img/2890227_1.jpg?shrink=330:330&_v=20180220144807'],
        ['LG유니참', '쏘피 바디피트 천연코튼 팬티라이너 롱 라벤더향 40개', 'http://prod.danawa.com/info/?pcode=5888587&cate=17227477', 'http://img.danawa.com/prod_img/500000/587/888/img/5888587_1.jpg?shrink=330:330&_v=20180212151121'],
        ['깨끗한나라', '깨끗한나라 순수한면 제로(ZERO) 중형 16개 ', 'http://prod.danawa.com/info/?pcode=6709270&cate=17227477', 'http://img.danawa.com/prod_img/500000/270/709/img/6709270_1.jpg?shrink=330:330&_v=20211125144330'],
        ['깨끗한나라', '깨끗한나라 순수한면 제로(ZERO) 팬티라이너 슈퍼롱 40개', 'http://prod.danawa.com/info/?pcode=6701566&cate=17227477', 'http://img.danawa.com/prod_img/500000/566/701/img/6701566_1.jpg?shrink=330:330&_v=20211125144330'],
        ['깨끗한나라', '깨끗한나라 순수한면 제로(ZERO) 대형 14개 ', 'http://prod.danawa.com/info/?pcode=6710365&cate=17227477', 'http://img.danawa.com/prod_img/500000/365/710/img/6710365_1.jpg?shrink=330:330&_v=20211125144330'],
        ['깨끗한나라', '깨끗한나라 디어스킨 슈퍼롱 팬티라이너 30개 ', 'http://prod.danawa.com/info/?pcode=12375671&cate=17227477', 'http://img.danawa.com/prod_img/500000/671/375/img/12375671_1.jpg?shrink=330:330&_v=20200928155959'],
        ['깨끗한나라', '깨끗한나라 건강한 순수한면 유기농 순면커버 대형 14개', 'http://prod.danawa.com/info/?pcode=7260403&cate=17227477', 'http://img.danawa.com/prod_img/500000/403/260/img/7260403_1.jpg?shrink=330:330&_v=20211125144434'],
        ['깨끗한나라', '깨끗한나라 건강한 순수한면 유기농 순면커버 중형 16개', 'http://prod.danawa.com/info/?pcode=6854536&cate=17227477', 'http://img.danawa.com/prod_img/500000/536/854/img/6854536_1.jpg?shrink=330:330&_v=20211125144434'],
        ['깨끗한나라', '깨끗한나라 순수한면 슈퍼가드 울트라 소형 18개', 'http://prod.danawa.com/info/?pcode=6790732&cate=17227477', 'http://img.danawa.com/prod_img/500000/732/790/img/6790732_1.jpg?shrink=330:330&_v=20211125144339'],
        ['깨끗한나라', '깨끗한나라 건강한 순수한면 유기농 슈퍼롱 팬티라이너 40개 ', 'http://prod.danawa.com/info/?pcode=9734622&cate=17227477', 'http://img.danawa.com/prod_img/500000/622/734/img/9734622_1.jpg?shrink=330:330&_v=20211125144429'],
        ['깨끗한나라', '깨끗한나라 순수한면 팬티라이너 슈퍼롱 40개 ', 'http://prod.danawa.com/info/?pcode=10377468&cate=17227477', 'http://img.danawa.com/prod_img/500000/468/377/img/10377468_1.jpg?shrink=330:330&_v=20211125144330'],
        ['깨끗한나라', '깨끗한나라 메이앤준 입는 오버나이트 4개 ', 'http://prod.danawa.com/info/?pcode=9963144&cate=17227477', 'http://img.danawa.com/prod_img/500000/144/963/img/9963144_1.jpg?shrink=330:330&_v=20211125144349'],
        ['깨끗한나라', '깨끗한나라 디어스킨 울트라슬림 날개 대형 14개 ', 'http://prod.danawa.com/info/?pcode=12373766&cate=17227477', 'http://img.danawa.com/prod_img/500000/766/373/img/12373766_1.jpg?shrink=330:330&_v=20200928143854'],
        ['깨끗한나라', '깨끗한나라 순수한면 슈퍼가드 울트라 대형 14개 ', 'http://prod.danawa.com/info/?pcode=6798580&cate=17227477', 'http://img.danawa.com/prod_img/500000/580/798/img/6798580_1.jpg?shrink=330:330&_v=20211125144339'],
        ['깨끗한나라', '깨끗한나라 순수한면 제로(ZERO) 오버나이트 12개 ', 'http://prod.danawa.com/info/?pcode=6719641&cate=17227477', 'http://img.danawa.com/prod_img/500000/641/719/img/6719641_1.jpg?shrink=330:330&_v=20211125144330'],
        ['깨끗한나라', '깨끗한나라 디어스킨 울트라슬림 날개 중형 16개 ', 'http://prod.danawa.com/info/?pcode=12374822&cate=17227477', 'http://img.danawa.com/prod_img/500000/822/374/img/12374822_1.jpg?shrink=330:330&_v=20200928152704'],
        ['깨끗한나라', '깨끗한나라 건강한 순수한면 유기농 소형 18개 ', 'http://prod.danawa.com/info/?pcode=6854347&cate=17227477', 'http://img.danawa.com/prod_img/500000/347/854/img/6854347_1.jpg?shrink=330:330&_v=20211125144434'],
        ['깨끗한나라', '깨끗한나라 순수한면 슈퍼가드 중형 16개 ', 'http://prod.danawa.com/info/?pcode=6798283&cate=17227477', 'http://img.danawa.com/prod_img/500000/283/798/img/6798283_1.jpg?shrink=330:330&_v=20211125144339'],
        ['깨끗한나라', '깨끗한나라 순수한면 제로(ZERO) 소형 18개 ', 'http://prod.danawa.com/info/?pcode=6707734&cate=17227477', 'http://img.danawa.com/prod_img/500000/734/707/img/6707734_1.jpg?shrink=330:330&_v=20211125144330'],
        ['깨끗한나라', '깨끗한나라 디어스킨 입는 오버나이트 중대형 4개 ', 'http://prod.danawa.com/info/?pcode=12973601&cate=17227477', 'http://img.danawa.com/prod_img/500000/601/973/img/12973601_1.jpg?shrink=330:330&_v=20210406164453'],
        ['깨끗한나라', '깨끗한나라 메이앤준 슈퍼롱 오버나이트 14개 ', 'http://prod.danawa.com/info/?pcode=13901180&cate=17227477', 'http://img.danawa.com/prod_img/500000/180/901/img/13901180_1.jpg?shrink=330:330&_v=20211125144350'],
        ['깨끗한나라', '깨끗한나라 순수한면 제로(ZERO) 팬티라이너 슈퍼롱 20개', 'http://prod.danawa.com/info/?pcode=6701320&cate=17227477', 'http://img.danawa.com/prod_img/500000/320/701/img/6701320_1.jpg?shrink=330:330&_v=20211125144330']

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
    var html = template.HTML(title, head, body);
    response.send(html);
});

module.exports = router;