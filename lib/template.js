module.exports = {
    HTML: function (title, head, body) {
        return `
      <html>
      <head>
          <meta charset="utf-8">
          <title>${title}</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet"
              integrity="sha384-uWxY/CJNBR+1z내jPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">
         <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/sticky-footer-navbar/">

          <meta name="viewport" content="width=device-width, initial-scale=1">

          <style>
              @font-face {
                  font-family: 'NanumSquareRound';
                  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
                  font-weight: normal;
                  font-style: normal;
              }
      
              * {
                  font-family: 'NanumSquareRound';
              }
      
              main>.container {
                  padding: 60px 15px 0;
              }

              .dropdown-content {
                  display: none;
                  position: absolute;
                  background-color: #f1f1f1;
                  min-width: 160px;
                  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
                  z-index: 1;
              }
      
              .dropdown-content a {
                  color: black;
                  padding: 12px 16px;
                  text-decoration: none;
                  display: block;
              }
      
              .dropdown-content a:hover {
                  background-color: #ddd;
              }
      
              .dropdown:hover .dropdown-content {
                  display: block;
              }
          </style>
          ${head}
      </head>
      
      <body class="d-flex flex-column h-100" id = "wrapper">
          <header>
              <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                  <div class="container-fluid">
                      <a class="navbar-brand" href="/"><strong>For me</strong></a>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                          aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarCollapse">
                          <ul class="navbar-nav me-auto mb-2 mb-md-0">
                              <li class="nav-item dropdown">
                                  <a class="nav-link active" aria-current="page" href="/store/pad">제품소개</a>
                                  <div class="dropdown-content">
                                      <a href="/store/pad">일회용 월경대</a>
                                      <a href="/store/cpad">면 월경대</a>
                                      <a href="/store/cup">월경컵</a>
                                      <a href="/store/tampon">탐폰</a>
                                      <a href="/store/merit">제품별 장단점</a>
                                  </div>
                              </li>
                              <li class="nav-item dropdown">
                                  <a class="nav-link active" aria-current="page" href="/community/recommendation">자유게시판</a>
                                  <div class="dropdown-content">
                                      <a href="/community/recommendation">제품추천</a>
                                      <a href="/community/requirement">For me에게 바란다</a>
                                  </div>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="/login">로그인</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="/signup">회원가입</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="/mypage">마이페이지</a>
                              </li>
                          </ul>
                          <form action="/search" method="post" class="d-flex mb-2 mb-md-0">
                              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="search">
                              <input class="btn btn-outline-success" type="submit" value="Search"/>
                          </form>
                      </div>
                  </div>
              </nav>
          </header>
          ${body} 
          <footer class="footer mt-auto py-3 bg-light" >
              <div class="container">
                  <span class="text-muted">
                      <center>문의사항 : forme@gmail.com</center>
                  </span>
              </div>
          </footer>
      </body>
      </html>      
      `;
    }
}