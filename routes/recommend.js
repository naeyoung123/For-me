var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
var author = require('../lib/author.js');

router.get('/recommend', function (request, response) {
    var title = `월경 용품 추천`;
    var head = `
    .title{
        text-align: center;
        color: #4f3618;
    }

    .btn {
        width:500px;
        height: 50px;
        margin: 10px auto auto auto;
        border: none;
        border-radius: 10px;
        background-color: ivory;
        text-align: center;
        color: #4f3618;
    }
    .btn:hover {
        background-color: #eeece3;
        cursor: pointer;
    }

    .btndiv{
        margin: 10px auto auto auto;
        text-align: center;
    }
    .qbox{
        background-color: ivory;
        border-radius: 10px;
        width : 500px;
        margin: 10px auto auto auto;
        padding: 50px;
        color: #4f3618;
        font-size: 30px;
        line-height: 35px;
        text-align: center;
    }
    .wrap{
        background-color: #fedc61;
    }
    </style>
    `;
    var body = `
    <main class="flex-shrink-0">
    <div class="container">
        <div class="row">
            <center>
            <div class="wrap">
                <div class="title">
                    <h3> 월경 용품 추천해드립니다. </h3>
                </div>
            </div>
                <div class="qbox" id="question">
                </div>
                <div class="btndiv" id="choice">
                </div>
            </div>
            </body>
            
            <script th:inline="javascript">
            let questions = /*[[${question}]]*/;
            let result = [0, 0, 0, 0];
            const max = 8;
            
            $(document).ready(function() {
                changeQuestion(0);
            });
            
            $(document).on("click", ".btn", function() {
                let currentQid = $(this).data("qid");
                $.each($(this).data("score").split(","), (idx, item) => result[idx] += Number(item));
                if (currentQid !== max)
                    changeQuestion(currentQid + 1);
                else {
                    let tid = result.indexOf(Math.max(...result));
                    postResult(tid);
                    getResult(tid);
                }
            });
            
            function changeQuestion(qid) {
                let choiceBtn = "";
                let choiceArray = questions[qid].choice;
                $("#question").text(questions[qid].content);
                choiceArray.forEach(choice => {
                    choiceBtn += "<button class='btn' data-qid=" + choice.qid + " data-score='" + choice.score + "'>" + choice.content + "</button><br/>";
                });
                $("#choice").empty().append(choiceBtn);
            }
            
            function postResult(tid) {
                $.ajax({
                    url: "/result",
                    type: "POST",
                    contentType:'application/json; charset=utf-8',
                    data: JSON.stringify({tid: tid}),
                    success: function() {
                    },
                    error: function (error) {
                        console.log(error);
                    }
                });
            }
            
            function getResult(tid) {
                $.ajax({
                    url: "/result/" + tid,
                    type: "GET",
                    data: tid,
                    success: function() {
                        location.href = "/result/" + tid;
                    },
                    error: function (error) {
                        console.log(error);
                    }
                });
            }
            </script>
            </center>
        </div>
    </div>
    </main>
`;
    var html = template.HTML(title, head, body, author.statusUI(request, response));
    response.send(html);
});

module.exports = router;