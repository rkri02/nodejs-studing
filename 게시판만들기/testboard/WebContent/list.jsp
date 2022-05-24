<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
	<table border="0" style="width:100%;">
		<tr>
			<td>
				<select>
					<option>제목</option>
				</select>
				<input type="text">
				<input type="button" value="검색">
			</td>
			<td align="right"><a class="button" href="write.jsp">글쓰기</a></td>
		</tr>
		<tr>
			<td colspan="2">※ 총 13개의 자료가 조회 되었습니다.</td>
		</tr>
		<tr>
			<td colspan="2">
				<table border="1" style="width:100%;">
					<tr>
						<th style="height:26px">번호</th>
						<th>제목</th>
						<th>작성자</th>
						<th>작성일</th>
						<th>조회수</th>
					</tr>
					<%
					for(int i=1;i<=10;i++)
					{
						%>
						<tr class="item">
							<td align="center" style="height:26px"><%= i  %></td>
							<td><a href="view.jsp">제목입니다.</a></td>
							<td align="center">홍길동</td>										
							<td align="center">2021.06.12</td>
							<td align="center">1</td>
						</tr>
						<%
					}
					%>								
				</table>
			</td>
		</tr>
		<tr>
			<td align="center" colspan="2">
				<a href="list.jsp">◀</a>
				<a href="list.jsp">1</a>
				<a href="list.jsp">2</a>
				<a href="list.jsp">3</a>
				<a href="list.jsp">4</a>
				<a href="list.jsp">5</a>					
				<a href="list.jsp">▶</a>
			</td>
		</tr>
	</table>
</body>
</html>