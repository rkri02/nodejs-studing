//`${변수가 온다}`
//const가 뭘까??
//const를 사용하면 var와 다르게 변수 재선언 불가능
//const 는 변수 재선언, 재할당이 모두 불가능하다. 

const greeting1 = 'hello';
const greeting2 = 'bye';
const name1 = 'Hong Gil Dong';
const name2 = 'Go Gil Dong';
console.log(`${greeting1}! my name is ${name1}`);
console.log(`${greeting2}! my name is ${name1}`);


console.log('===========================');

const statement = `${greeting1}! my name is ${name2}`;
const statement2 = `${greeting2}! my name is ${name2}`;
console.log('statement:', statement);
console.log('statement2:', statement2);
