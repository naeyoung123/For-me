const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const mainRouter = require('./routes/main.js');
const loginRouter = require('./routes/login.js');
const signupRouter = require('./routes/signup.js');
const cpadRouter = require('./routes/store/cpad.js');
const cupRouter = require('./routes/store/cup.js');
const padRouter = require('./routes/store/pad.js');
const tamponRouter = require('./routes/store/tampon.js');
const meritRouter = require('./routes/store/merit.js');

const express = require('express');
const app = express();

app.use(express.static('public'));


app.use('/', mainRouter);
app.get('/login', loginRouter);
app.get('/signup', signupRouter);
app.get('/store/cpad', cpadRouter);
app.get('/store/cup', cupRouter);
app.get('/store/pad', padRouter);
app.get('/store/tampon', tamponRouter);
app.get('/store/merit', meritRouter);



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