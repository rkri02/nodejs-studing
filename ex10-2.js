const date = new Date(2021, 10, 12, 9, 20, 30);
console.log('date : %s', date.toLocaleString());
console.log('LocaleDateString : %s', date.toLocaleDateString());
console.log('LocaleTimeString : %s', date.toLocaleTimeString());


console.log("================================")


console.log('year : %s', date.getFullYear());
console.log('month : %s', date.getMonth() + 1);
console.log('date : %s', date.getDate());
console.log('hours : %s', date.getHours());
console.log('minutes : %s', date.getMinutes());
console.log('seconds : %s', date.getSeconds());

