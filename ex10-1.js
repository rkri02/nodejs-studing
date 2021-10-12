const today = new Date();


const Today = new Date(); 
year = Today.getYear()+1900;
month = Today.getMonth() + 1;
date = Today.getDate();
console.log(" --- 오늘 날짜 ---"); 



console.log(year + "년 " + month + "월 " + date + "일 "); 
console.log("================================")
console.log(today.toLocaleString());

