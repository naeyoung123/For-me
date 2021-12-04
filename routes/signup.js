var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');

router.get('/signup', function (request, response) {
    var title = '회원가입';
    var head = `
    <style>
        main>.container {
            padding: 60px 15px 0;
        }

        @font-face {
            font-family: 'NanumSquareRound';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }

        * {
            font-family: 'NanumSquareRound';
        }

        body {
            text-align: center;
        }

        #signupLogo {
            color: black;
            font-size: 3.0rem;
            margin-bottom: 30px;
        }

        .signupBox {
            background-color: white;
            width: 50%;
            height: 50%;
            text-align: center;
            border: 1px solid black;
            margin-top: 100px auto;
            border-radius: 30px;
            padding-bottom: 30px;
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

        #idpara,
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
        #gologin {
            margin-top: 10px;
            margin-bottom: 0;
            font-size: 0.9rem;
            color: rgb(143, 143, 143);
            font-weight: 700;
        }

        #gologin {
            color: black;
        }

        #link {
            text-decoration-line: none;
            color: black
        }
    </style>
    `;
    var body = `
    <main class="flex-shrink-0">
    <br><br><br>
    <script>
        function check_signup() {
            const emailReg = document.getElementById("email").value;
            const passwordReg = document.getElementById("password").value;
            const passwordCheckReg = document.getElementById("passwordCheck").value;
            const nicknameReg = document.getElementById("nickname").value;
            const policyagree = document.getElementById("policyagree").checked;

            if (policyagree === false) {
                return alert('SEED 정책에 동의하셔야 합니다.');
            }
            const email_check = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
            if (!emailReg.match(email_check)) {
                return alert('올바른 이메일 형식을 입력하세요.');
            }
            const password_check = /^[a-z0-9]{3,19}$/g;
            if (!password_check.test(passwordReg)) {
                return alert('비밀번호는 4자 이상 20자 이하여야 합니다.')
            } else if (passwordReg !== passwordCheckReg) {
                return alert('비밀번호가 일치하지ㅌ 않습니다.')
            }
            if (nicknameReg.length === 0 || nicknameReg.length < 2) {
                return alert('이름은 2글자 이상이어야 합니다.');
            }
        }
    </script>

    <div class="container">
        <div className="signupBox">
            <p id="signupLogo"><strong>Sign up</strong></p>
            <form className="inputField">
                <p id="emailpara">Email</p>
                <input type="email" class="input-type" id="email" placeholder="email" />
                <br />
                <p id="pwpara">Password</p>
                <input type="password" class="input-type" id="password" placeholder="password" />
                <br />
                <input type="password" class="input-type" id="passwordCheck" placeholder="password confirm" />
                <p id="nicknamepara">Nickname</p>
                <input class="input-type" id="nickname" placeholder="nickname" />
                <br />
                <input type="checkbox" id="policyagree" /> <span id="policypara"> For me 정책에 동의합니다. </span><br>
                <button type="submit" id="signupSubmitBtn" onClick=check_signup()>Sign up</button>
                <p id="orpara">─────────────　OR　─────────────</p>
                <p id="loginpara">Already have a account?<a href="login" id="link">　Log in</a></p>
            </form>
        </div>
    </div>

`;
    var html = template.HTML(title, head, body);
    response.send(html);
});

module.exports = router;