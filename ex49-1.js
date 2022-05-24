// CRUD에 필요한 모듈 사용
const mysql = require('mysql');
const express = require('express');
const fs = require('fs');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const { response } = require('express');

// 연결할 DB 정보입력
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'enwlstn1!',
  database: 'test',
  port: '3306',
});

const app = express();
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.listen(5000, () => {
  console.log('Server is running http://127.0.0.1:5000');
  // 데이터베이스 연결
  connection.connect();
});


//데이터 조회 
app.get('/',(request,response) => 
{
    fs.readFile('booklist.html','utf-8',(error,data) =>
    {
        var sql = "select * from books";
        connection.query(sql,(error,results,fileds)=>
        {
            if (error) throw error;
        response.send(ejs.render(data,{
            data: results,
            }));
        });
    });
});


app.get('/create', (request,response)=>
{
    fs.readFile('insertNewBook.html','utf-8',(error,data) =>
    {
    if (error) throw error;
    response.send(data);
    });
});

app.post('/create', (request, response) => {
    const body = request.body;
    console.log(body.genre, body.name, body.writer, body.releasedate);
    var genre       = body.genre;
    var name        = body.name;
    var writer      = body.writer;
    var releasedate = body.releasedate;
    var sql         = "INSERT INTO books (genre, name, writer, releasedate) VALUE"; 
        sql        +="('"+genre+"', '"+name+"', '"+writer+"', '"+releasedate+"')";
    var parmas      = [genre,name,writer,releasedate];
    connection.query(sql,parmas,(error,results,fileds)=>{
        if (error) throw error;
      // 조회 페이지로 이동
      response.redirect('/');
    });
});


// 데이터 수정
app.get('/modify/:id', (request, response) => 
{
      // 파일을 읽어옵니다.
    fs.readFile('modify.html', 'utf-8', (error, data) => 
    {
        var sql  = "select* from books ";
        sql += "where number = "+request.params.id; 
        sql = "select* from books where number = 2";
        console.log(sql);

        connection.query(sql,(error,results,fileds) => 
        {
            if (error) throw error;
            
            response.send(data,{
                data: results,
            });
        });
    });
});

app.post('/modify/:id', (request, response) => 
{
    const body = request.body;
    connection.query('UPDATE books SET genre = ?, name = ?, writer = ? WHERE number = ?',
        [body.genre, body.name, body.writer, request.params.id], (error, results) => 
    {
        if (error) throw error;
          // 조회페이지로 이동
        response.redirect('/');
    });
});
    

// 데이터 삭제
app.get('/delete/:id', (request, response) => 
{
    var sql  = "DELETE FROM books ";
        sql +="where number = "+request.params.id;
    console.log(sql);
    connection.query(sql, (error, results) => 
    {
        if (error) throw error;
          // 조회페이지로 이동
        response.redirect('/');
    });
});
    