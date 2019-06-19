var express = require("express");
var router = express.Router(); // 
var mysql = require("mysql");
var fs = require("fs");
var ejs = require("ejs");
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));
//게시판 페이징

router.get("/list/:cur", function(req, res) {

   fs.readFile('list.html', 'utf-8', function (error, data) {
      res.send(ejs.render(data));
   });
      
});

router.get("/", function(req,res){
   console.log("메인화면");
   res.redirect('/list/1');
});

// MYSQL 연결
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