// mysql 모듈 사용
const mysql = require('mysql');
console.log("mysql 모듈 사용");

// 연결할 DB 정보입력
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'enwlstn1!',
  database: 'test',
  port: '3306',
});
console.log("데이터베이스 정보입력");

// 데이터베이스 연결
connection.connect();
console.log("데이터베이스 연결");


// create 쿼리문 사용
connection.query(' create table tt1 (ID int);', (error, results, fields) => 
{
    console.log("쿼리문 사용");
    if (error) throw error;
    console.log(results);
});

/*
connection.query('describe books', (error, results, fields) => {
    console.log("쿼리문 사용 2");
    if (error) throw error;
    console.log(results);
});
*/

// 연결 종료
connection.end();
