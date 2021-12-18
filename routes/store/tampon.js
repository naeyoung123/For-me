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

    .content{
        width: 100%; 
        height: 850px;
    }

    #store-img{
        position:absoulte; 
        width:100%; height:100%;
    }
    </style>`;

    var data = [
        ['유한킴벌리','화이트','화이트 순면 탐폰 슈퍼 16개','http://prod.danawa.com/info/?pcode=10105353&cate=17327492',"http://img.danawa.com/prod_img/500000/140/105/img/10105140_1.jpg?shrink=330:330&_v=20191209161534"],
        ['유한킴벌리','화이트','화이트 순면 탐폰 슈퍼 8개','http://prod.danawa.com/info/?pcode=10770312&cate=17327492',"http://img.danawa.com/prod_img/500000/353/105/img/10105353_1.jpg?shrink=330:330&_v=20210604125657"]
    ];
    
    var list = ' ';
    for (var i = 0; i<data.length; i++){
        var company = data[i][0];
        var brand = data[i][1];
        var product = data[i][2];
        var address = data[i][3];
        var image = data[i][4];
        list += `
        <div class="box">
            <div id ="store-img" style= "position:absoulte; width:100%; height:100%;">
                <a href = "${address}"><img src = "${image}" style= "position:absoulte; width:100%; height:100%;"></img></a> 
                <br><br>
                <h5>제조사명 : ${company}</h5>
                <h5>브랜드명 : ${brand}</h5>
                <h6>제품명 : ${product}</h6><br>
            </div>
        </div>`;  
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

        <div class = "text-center"> 
			<ul class="pagination">
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