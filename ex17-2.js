const pow1 = Math.pow(7, 2);            // 49
const pow2 = Math.pow(2, 2);            // 4
const pow3 = Math.pow(8, 1 / 3);        // 2
const pow4 = Math.pow(2, 0.5);          // 1.4142135623730951
const pow5 = Math.pow(7, -2);           // 0.02040816326530612
const pow6 = Math.pow(8, -1 / 3);       // 0.5
const pow7 = Math.pow(-7, 2);           // 49
const pow8 = Math.pow(-7, 1 / 2);       // NaN


console.log('pow1:', pow1);
console.log('pow2:', pow2);
console.log('pow3:', pow3);
console.log('pow4:', pow4);
console.log('pow5:', pow5);
console.log('pow6:', pow6);
console.log('pow7:', pow7);
console.log('pow8:', pow8);

/*========================================================
자바스크립트 제곱 표현 방법은 Math.pow() 메서드를 사용합니다. 
음수의 소수 지수는 허수로 NaN을 반환합니다. 
계산 가능 범위를 넘어서면 Infinity를 반환합니다.

23 = 8 과 같은 거듭 제곱을 나타낼 때 자바스크립트에서는 
Math.pow(2, 3)와 같은 객체 및 메서드를 사용합니다.
========================================================*/