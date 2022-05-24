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
      database: 'testboard',
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
    fs.readFile('list.html','utf-8',(error,data) =>
    {
        var sql = "select * from list";
        connection.query(sql,(error,results,fileds)=>
        {
            if (error) throw error;
        response.send(ejs.render(data,{
            data: results,
            }));
        });
    });
});


app.get('/create',(request,response) => 
{
    fs.readFile('write.html','utf-8',(error,data) =>
    {
        if (error) throw error;
        response.send(data);
    });
}); 


app.post('/create', (request, response) => {
    const body      = request.body;
    console.log(body.title);
    console.log(body.name);
    // console.log(body.text);
    var title        = body.title;
    var name         = body.name;
    var sql          ="insert into list (title, name, releasedate,hit) VALUE"; 
        sql         +="('"+title+"', '"+name+"', now(), '1')";
    

    var parmas       = [title,name];
    connection.query(sql,parmas,(error,results,fileds)=>{
        if (error) throw error;
      // 조회 페이지로 이동
      response.redirect('/');
    });

});


app.get('/view',(request,response) => 
{
    var params = request.params;
    var no = request.param('number');
    console.log(no);

    fs.readFile('view.html','utf-8',(error,data) =>
    {

        var sql = "update list set hit = hit+ 1 where number = "+no;
        connection.query(sql,(error,results,fileds)=>
        {
        
        });

        var sql = "select * from list where number = "+no;
        connection.query(sql,(error,results,fileds)=>
        {
            if (error) throw error;
            response.send(ejs.render(data,  
            {
                data: results,
            }));
        });
    });
}); 


app.get('/delete',(request,response) => 
{
    var no = request.param('number');
    console.log(no);
    var sql  ="DELETE FROM list ";
        sql +="where number = "+no;
    connection.query(sql,(error,results,fileds)=>
    {
        response.redirect('/');
    });
});



app.get('/modify',(request,response) => 
{
    var no = request.param('number');
    console.log(no);
    fs.readFile('modify.html','utf-8',(error,data) =>
    {
        var sql = "select * from list where number = " + no;
        connection.query(sql,(error,results,fileds)=>
        {
            if (error) throw error;
            response.send(ejs.render(data,  
            {
                data: results,
            }));
        });
    });
});

app.post('/modify', (request, response) => {
    const body      = request.body;
    var no = request.param('number');
    // console.log(no);
    // console.log(body.title);
    // console.log(body.name);
    // console.log(body.text);
    var title        = body.title;
    var name         = body.name;
    var sql          ="UPDATE list SET title = '"+title+"', name = '"+name+"' "; 
        sql         +="WHERE number = "+no;
    
    console.log(sql);
    var parmas       = [title,name];
    connection.query(sql,parmas,(error,results,fileds)=>{
        if (error) throw error;
      // 조회 페이지로 이동
      response.redirect('/');
    });

});




