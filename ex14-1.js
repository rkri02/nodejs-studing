const Hello = () => console.log('hello');       // {}중괄호를 쓰지 않아도 된다.
const Hello2 = () => 'hello2';                  // hello2를 return한다.
const Message = message => console.log(message);// 메세지라는 매게변수를 갖는다
const plus = (a, b) => a + b;                   // 매게 변수를 더하는 것
const minus = (a, b) => a - b;                  // 매게 변수를 뺀것


Hello();                                         // hello가 출력된다.
console.log(Hello2());                           // hello2가 출력된다.
Message('메세지');
console.log('plus : %d', plus(10, 20));
console.log('minus : %d', minus(10, 20));

