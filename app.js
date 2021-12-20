const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const db = require('./db.js');
const session = require('express-session');

const mainRouter = require('./routes/main.js');
const loginRouter = require('./routes/login.js');
const loginProcessRouter = require('./routes/login_process.js');
const logoutProcessRouter = require('./routes/logout_process.js');
const signupRouter = require('./routes/signup.js');
const signupProcessRouter = require('./routes/signup_process.js');
const findPwRouter = require('./routes/accounts/find_password.js');
const findPwProcessRouter = require('./routes/accounts/find_password_process.js');
const findPwSuccessRouter = require('./routes/accounts/find_password_success.js');

const myPageRouter = require('./routes/mypage/main_mypage.js');
const mypageRecPageRouter = require('./routes/mypage/page_rec.js');
const mypageRecUpdateRouter = require('./routes/mypage/update_rec.js');
const mypageRecUpdateProcessRouter = require('./routes/mypage/update_rec_process.js');
const mypageRecDeleteProcessRouter = require('./routes/mypage/delete_rec_process.js');
const mypageReqPageRouter = require('./routes/mypage/page_req.js');
const mypageReqUpdateRouter = require('./routes/mypage/update_req.js');
const mypageReqUpdateProcessRouter = require('./routes/mypage/update_req_process.js');
const mypageReqDeleteProcessRouter = require('./routes/mypage/delete_req_process.js');
const mypagePadLikeRouter = require('./routes/mypage/like_process_pad.js');
const mypageCpadLikeRouter = require('./routes/mypage/like_process_cpad.js');
const mypageCupLikeRouter = require('./routes/mypage/like_process_cup.js');
const mypageTamponLikeRouter = require('./routes/mypage/like_process_tampon.js');
const mypageComDeleteProcessRouter = require('./routes/mypage/delete_com_process.js');

const cpadRouter = require('./routes/store/cpad.js');
const cupRouter = require('./routes/store/cup.js');
const padRouter = require('./routes/store/pad.js');
const tamponRouter = require('./routes/store/tampon.js');
const meritRouter = require('./routes/store/merit.js');
const likePadRouter = require('./routes/store/pad_like_process.js');
const likeCpadRouter = require('./routes/store/cpad_like_process.js');
const likeCupRouter = require('./routes/store/cup_like_process.js');
const likeTamponRouter = require('./routes/store/tampon_like_process.js');

const recommendationRouter = require('./routes/community/main_rec.js');
const createRecRouter = require('./routes/community/create_rec.js');
const createRecProcessRouter = require('./routes/community/create_rec_process.js');
const recommendationPageRouter = require('./routes/community/page_rec.js');
const recommendationCommentRouter = require('./routes/community/comment_process_rec.js');
const requirementRouter = require('./routes/community/main_req.js');
const createReqRouter = require('./routes/community/create_req.js');
const createReqProcessRouter = require('./routes/community/create_req_process.js');
const requirementPageRouter = require('./routes/community/page_req.js');

const searchRouter = require('./routes/search.js');

const express = require('express');
const app = express();

app.use(express.static('public'));

app.use(session({
  secret:'my key',
  resave: false,
  saveUninitialize: true 
}));

app.use('/', mainRouter);
app.use(express.static('public'));
app.get('/login', loginRouter);
app.post('/login_process',loginProcessRouter);
app.get('/logout_process',logoutProcessRouter);
app.get('/signup', signupRouter);
app.post('/signup_process', signupProcessRouter);
app.post('/login_process',loginProcessRouter);
app.get('/logout_process', logoutProcessRouter);
app.get('/find_password', findPwRouter);
app.post('/find_password_process', findPwProcessRouter);
app.get('/find_password/success/:email', findPwSuccessRouter);

app.get('/mypage', myPageRouter);
app.get('/mypage/page_rec/page/:pageId', mypageRecPageRouter);
app.get('/mypage/update/page_rec/:pageId', mypageRecUpdateRouter);
app.post('/mypage/update_rec_process', mypageRecUpdateProcessRouter);
app.post('/mypage/delete_rec_process', mypageRecDeleteProcessRouter);
app.get('/mypage/page_req/page/:pageId', mypageReqPageRouter);
app.get('/mypage/update/page_req/:pageId', mypageReqUpdateRouter);
app.post('/mypage/update_req_process', mypageReqUpdateProcessRouter);
app.post('/mypage/delete_req_process', mypageReqDeleteProcessRouter);
app.post('/mypage/like_process/pad', mypagePadLikeRouter);
app.post('/mypage/like_process/cpad', mypageCpadLikeRouter);
app.post('/mypage/like_process/cup', mypageCupLikeRouter);
app.post('/mypage/like_process/tampon', mypageTamponLikeRouter);
app.post('/mypage/delete_com_process', mypageComDeleteProcessRouter);

app.get('/store/cpad', cpadRouter);
app.get('/store/cup', cupRouter);
app.get('/store/pad', padRouter);
app.get('/store/tampon', tamponRouter);
app.get('/store/merit', meritRouter);
app.post('/store/like_process/pad', likePadRouter);
app.post('/store/like_process/cpad', likeCpadRouter);
app.post('/store/like_process/cup', likeCupRouter);
app.post('/store/like_process/tampon', likeTamponRouter);

app.get('/community/recommendation', recommendationRouter);
app.get('/community/recommendation/create', createRecRouter);
app.post('/community/recommendation/create_process', createRecProcessRouter);
app.get('/community/recommendation/page/:pageId', recommendationPageRouter);
app.post('/community/recommendation/page/:pageId/comment_process', recommendationCommentRouter);
app.get('/community/requirement', requirementRouter);
app.get('/community/requirement/create', createReqRouter);
app.post('/community/requirement/create_process', createReqProcessRouter);
app.get('/community/requirement/page/:pageId', requirementPageRouter);

app.post('/search', searchRouter);


// var server = http.createServer(function (request, response) {
//   var _url = request.url;

//   if (_url == '/') {
//     _url = 'main.html';
//   }
//   if (_url == '/favicon.ico') {
//     return response.writeHead(404);
//   }
//   else if (_url == '/login'){
//     _url = 'login.html';
//   }
//   else if (_url == '/signup'){
//     _url = 'signup.html';
//   }
//   else if (_url == '/mypage'){
//     _url = './src/accounts/myPage.html';
//   }
//   else if (_url == '/pad'){
//     _url = './src/store/pad.html';
//   }
//   else if (_url == '/cpad'){
//     _url = './src/store/cpad.html';
//   }
//   else if (_url == '/cup'){
//     _url = './src/store/cup.html';
//   }
//   else if (_url == '/tampon'){
//     _url = './src/store/tampon.html';
//   }
//   else if (_url == '/findpw'){
//     _url = './src/accounts/find_pw.html';
//   }
//   response.writeHead(200);
//   response.end(fs.readFileSync(_url));
// });

// app.get('/', (request, response) => {
//   response.sendFile('/main.html');
// });

app.listen(3000, function () {
  console.log("server is running.")
});