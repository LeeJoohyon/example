//모듈 임포트
var express = require("express");
var app = express();
var mysql = require("mysql"); //mysql 임포트
var bodyParser = require("body-parser");
//미들웨어 설정
app.use(express.static("public")); //기본 파일 폴더 위치 설정
app.use(bodyParser.urlencoded({ extended: false }));

//게시판
var mainRouter = require("./router/main");


app.use(mainRouter);
//var PORT = process.env.PORT || 3000
//서버 가동
app.listen(3001, function() {
  console.log("서버가동");
});