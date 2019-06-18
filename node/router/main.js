var express = require("express");
var router = express.Router(); // 
var mysql = require("mysql");
var fs = require("fs");
var ejs = require("ejs");
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));
//게시판 페이징

router.get("/list/:cur", function(req, res) {
   var queryString = "select count(*) as cnt from post";
   getConnection().query(queryString, function(err, data) {
      if (err) {
        console.log(err + "리스트 mysql 조회 실패");
        return;
      }else{
         console.log(data);
      }
   });
});


var connection = mysql.createPool({
   connectionLimit: 10,
   host: 'testdb.chnpgohbb2gz.ap-northeast-2.rds.amazonaws.com',
   user: 'root',
   database: 'board',
   password: '#bisu103702'
 });
 
 //디비 연결 함수
 function getConnection() {
   return connection;
 }


 module.exports = router;