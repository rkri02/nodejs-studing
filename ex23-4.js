const string = '(<h1>:::특별가 - 99,000원:::</h1>)';


const res1 = string.replace(/[()]/g, '');
const res2 = string.replace(/[()/\-,]/g, '');


console.log('바꾸기 전 ---->', string);
console.log('()없애기 ---->', res1);
console.log('/-없애기 ---->', res2);

/*=======================================================================
정규표현식[]
이 패턴 타입은 괄호 안의 어떤 문자(이스케이프 시퀀스까지 포함)와도 대응됩니다. 
=======================================================================*/