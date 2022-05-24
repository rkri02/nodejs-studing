<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<title>node.js 게시판 만들기</title>
		</head>
	
		<body>
			<h1>book list</h1> 
			<hr>
			
			<table width="100%" border="1">
				<tr>
					<th>번호</th>
					<th>제목</th>
					<th>작성자</th>
					<th>작성일</th>
					<th>조회수</th>
				</tr>
				<% data.forEach(function(list, index){   %>
				<tr>
					<td> <%= list.number %> </td>
					<td> <%= list.title %> </td>
					<td> <%= list.name  %></td>
					<td> <%= list.releasedate %> </td>
					<td> <%= list.hit %> </td>
				</tr>
				
				<%
				});
				%>
			</table>
			<hr>
			<form action="/create" method="get">
				<input type="submit" value="create">
			</form>
		</body>
	</html>
	
	