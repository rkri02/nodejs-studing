const maxResult = Math.max(-10, 10, 20, 30, 40, -10, 30, 40, -10, 100, 20, 30, 40);
const minResult = Math.min(-10, 10, 20, 20, 30, 40, -11,-20);


console.log('max :', maxResult);
console.log('min :', minResult);

/*===============================================================
Math.max() 함수는 숫자 집합중에 가장 큰 수를 리턴하는 함수이며,
Math.min() 함수는 숫자 집합중에서 가장 작은 수를 리턴하는 함수입니다.
===============================================================*/

console.log("===================================");
const randomNumber = Math.random();                  // 0 to 1
const zeroToNine = Math.floor(Math.random() * 10);   // 0 to 9
const oneToTen = Math.floor(Math.random() * 10) + 1; // 1 to 10

console.log(randomNumber);                  
console.log('zeroToNine:', zeroToNine);     
console.log('oneToTen:', oneToTen);

/*====================================================================
Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
====================================================================*/