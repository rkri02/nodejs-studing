// mysql 모듈 사용
const mysql = require('mysql');
console.log("1");

// 연결할 DB 정보입력
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'enwlstn1!',
  database: 'test',
  port: '3306',
});
console.log("2");
// 데이터베이스 연결
connection.connect();
console.log("3");

var sql = "create table tt2 (ID int);";
connection.query(sql, (error, results, fields) => 
{
    if (error) throw error;
    console.log(results);
});
    

//데이터베이스 연결 종료
connection.end();