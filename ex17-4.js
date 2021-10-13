const sign1 = Math.sign([3]); //  1
const sign2 = Math.sign(-3); 
const sign3 = Math.sign('-3'); 
const sign4 = Math.sign(3/-0); //  0
const sign5 = Math.sign(NaN); // NaN
const sign6 = Math.sign('abc'); // NaN
const sign7 = Math.sign(); // NaN


console.log('sign1:', sign1);
console.log('sign2:', sign2);
console.log('sign3:', sign3);
console.log('sign4:', sign4);
console.log('sign5:', sign5);
console.log('sign6:', sign6);
console.log('sign7:', sign7);

/*=================================================================
sign() 내장함수가 있습니다. 이 함수를 사용하면 현재 사용된 값이 양수, 
음수 그리고 0 중 어떤 것인지 확인하여 각각 1, -1, 0으로 반환해줍니다.
=================================================================*/