// 3항 연산자(조건연산자)
// (조건 ? 수식1 : 수식2) 일경우
// 조건이 참일경우 수식1이 결과값 거짓일경우 수식2가 결과값을 가진다.


let x = 10;  
let y = 20;
let z = ( x > y ? x : y);


console.log(x);
console.log(y);
console.log(z);
// 각각의 출력되는 문자는 10,20,20으로 순서대로 출력이 된다.

// 문자열로 표현해서 쉽게 확인하기 위함
let x1 = "true";  
let y1 = "false";
let zt = ( x < y ? x1 : y1);
let zf = ( x > y ? x1 : y1);


console.log(zt);
console.log(zf);
// 각각의 출력되는 문자는 true / false로 나타나 진다