const string = '<h1>:::특별가 - 99,000원:::</h1>';
const result1 = string.replace(/<h1>/g, '');
console.log(result1);


const result2 = string.replace(/<h1>/g, '').replace(/<\/h1>/g, '');
console.log(result2);

/*==============================
정규표현식 이스케이프란
특정한 규칙을 가진 문자열의 집합
==============================*/