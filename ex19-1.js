const greeting = 'hello';
const greeting2 = 'nice to meet you';
const smallBracket = '()';


const replacedGreeting = greeting.replace('hello', 'hi');
const replacedGreeting2 = greeting2.replace('meet', 'see');


console.log(replacedGreeting);
console.log(replacedGreeting2);

/*===============================================================
replace() 함수는  문자열에서 변경하려는 문자열이 여러 번 반복될 경우,
첫 번째로 발견한 문자열만 치환해 줍니다.
===============================================================*/