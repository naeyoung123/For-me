var express = require('express');
var router = express.Router();
var template = require('../../lib/template.js');
var author = require('../../lib/author.js');
const db = require('../../db.js');
var path = require('path');

router.get('/find_password/success/:email', function (request, response) {
    var email = path.parse(request.params.email).base;
    db.query(`SELECT * FROM user WHERE email=?`, [email], function(err, res){
        var title = '비밀번호 찾기 성공';
        var head = `
            <style>
                    #signupLogo {
                        color: black;
                        font-size: 2.0rem;
                        margin-bottom: 30px;
                    }

                    .signupBox {
                        background-color: white;
                        width: 50%;
                        height: 60%;
                        text-align: center;
                        border: 1px solid rgb(0, 0, 0);
                        margin-top: 150px;
                        margin-left: 25%;
                        border-radius: 30px;
                        padding-bottom: 30px;
                    }

                    .inputField {
                        background-color: white;
                        margin-bottom: 77px;
                    }

                    .input-type {
                        color: black;
                        font-size: 1.0rem;
                        font-weight: 700;
                        border: 2px solid white;
                        box-shadow: 1px 1px 4px rgb(165, 165, 165);
                        display: inline-block;
                        width: 270px;
                        height: 35px;
                        margin-top: 8px;
                        margin-bottom: 10px;
                        border-radius: 10px;
                        padding: 3px 5px 3px 15px;
                    }

                    #password_signup {
                        margin-bottom: 8px;
                    }

                    #pwpara,
                    #emailpara,
                    #nicknamepara {
                        color: black;
                        font-weight: 700;
                        margin-bottom: 0px;
                        margin-right: 200px;
                        padding-left: 60PX;
                        font-size: 1.1rem;
                    }

                    #emailpara {
                        margin-right: 260px;
                    }

                    #pwpara,
                    #nicknamepara {
                        margin-right: 230px;
                    }

                    #passwordcheck_signup {
                        margin-bottom: 8px;
                    }

                    #checkpara {
                        margin-top: 0px;
                        margin-left: 90px;
                        font-size: 0.8rem;
                        font-weight: 700;
                        color: grey;
                    }

                    #policyagree {
                        color: black;
                        background-color: white;
                        width: 20px;
                        height: 20px;
                        border: none;
                        box-shadow: none;
                        vertical-align: bottom;
                        margin-bottom: 0;
                    }

                    #policypara {
                        font-weight: 700;
                        color: black;
                    }

                    #signupSubmitBtn {
                        background-color: gray;
                        width: 270px;
                        color: black;
                        font-weight: 700;
                        font-size: 1.0rem;
                        vertical-align: middle;
                        padding-top: 10px;
                        padding-bottom: 10px;
                        border: 0.2px solid rgb(158, 158, 158);
                        border-radius: 15px;
                        box-shadow: 1px 1px 4px rgb(165, 165, 165);
                        cursor: pointer;
                        margin-top: 20px;
                    }

                    #orpara {
                        color: rgb(216, 216, 216);
                        font-weight: 700;
                        margin-top: 25px;
                        margin-bottom: 25px;
                    }

                    #loginpara,
                    #link {
                        margin-top: 10px;
                        margin-bottom: 0;
                        font-size: 0.9rem;
                        color: rgb(143, 143, 143);
                        font-weight: 700;
                    }

                    #link {
                        color: black;
                        text-decoration-line: none;
                    }
                </style>
                `;
                var body = `
                <main class="flex-shrink-0">
                    <div class="container">
                        <div class="signupBox">
                            <p id="signupLogo"><strong>비밀번호 찾기</strong></p>
                            <p id="nicknamepara">Email</p>
                            <p class="input-type" placeholder="email">${res[0].email}</p>
                            <br>
                            <p id="nicknamepara">Nickname</p>
                            <p class="input-type" id="nickname" placeholder="nickname">${res[0].nickname}</p>
                            <br>
                            <p id="nicknamepara">Password</p>
                            <p class="input-type" id="password" placeholder="password">${res[0].password}</p>
                        </div>
                    </div>
                </main>
                `;
                var html = template.HTML(title, head, body, author.statusUI(request, response));
                response.send(html);
    })
});

module.exports = router;