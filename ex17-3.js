const sqrt1 = Math.sqrt(9); // 3
const sqrt2 = Math.sqrt(1);  // 1
const sqrt3 = Math.sqrt(0);  // 0
const sqrt4 = Math.sqrt(-1); // NaN


const cbrt1 = Math.cbrt(-8); // -2
const cbrt2 = Math.cbrt(0); // 0
const cbrt3 = Math.cbrt(1); // 1
const cbrt4 = Math.cbrt(-2/0); // Infinity


console.log('sqrt1:', sqrt1);
console.log('sqrt2:', sqrt2);
console.log('sqrt3:', sqrt3);
console.log('sqrt4:', sqrt4);
console.log('cbrt1:', cbrt1);
console.log('cbrt2:', cbrt2);
console.log('cbrt3:', cbrt3);
console.log('cbrt4:', cbrt4);


/*========================================================
자바스크립트 제곱근 sqrt 메서드로 실수의 제곱근을 구할 수 있습니다. 
허수는 NaN을 반환합니다.
자바스크립트를 사용하여 세제곱근을 구하는 방법은 
Math 객체의 cbrt() 메소드를 사용할 수 있습니다. 
========================================================*/