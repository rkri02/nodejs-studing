//문자데이터는 ''안으로 가능하며 숫자는 그냥 선언이 가능하다

const string10 = '10';
const string20 = '20';
const number10 = 100;
const number20 = 200;

//문자열이라서 10,20이 1020으로 나타내진다.
console.log('string:%s', string10 + string20);

//숫자열을 더하는것이라 100,200이 더한값 300이나온다.
console.log('number:%d', number10 + number20);

//숫자 문자열을 더하는것이라서 10,200이 10200으로 나타내진다.
console.log('string + number:%s', string10 + number20);

