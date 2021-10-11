// json - JavaScript Object Notation 의 준말이다.

const user = {};
user.name = 'Hong Gil Dong';
user.age = 20;
user.addr = "Seoul";
console.log(user);



// 키 : 값 형식으로 이우러진게 json 형식이다.
const user2 = { 
    name: 'Hong Gil Dong', 
    age: 20,
    addr:"Seoul"
}; 
console.log(user2);

// 둘다 같은 결과값인 { name: 'Hong Gil Dong', age: 20, addr: 'Seoul' }이 찍히게 된다
