var express = require('express');
var app = express();
var router = require('./router/main')(app); 
//라우터 모듈인 main.js 를 불러와서 app 에 전달해줍니다.

app.set('views', __dirname + '/views'); 
//서버가 읽을 수 있도록 HTML 의 위치를 정의해줍니다.
app.set('view engine', 'ejs'); 
//서버가 HTML 렌더링을 할 때, EJS 엔진을 사용하도록 설정합니다.
app.engine('html', require('ejs').renderFile); 
//서버가 HTML 렌더링을 할 때, EJS 엔진을 사용하도록 설정합니다.

// 만약 ejs 설치 에러가 났다면,
// npm install ejs --save로 다시 ejs를 다시 설치하고 진행주시면 됩니다.

app.use(express.static('public'));

var server = app.listen(3000, function(){
   console.log("Express server has started on port 3000")
});
