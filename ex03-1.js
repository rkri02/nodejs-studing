let fruit = 'apple';
console.log('fruit:', fruit);

fruit = 'grape';
console.log('fruit:', fruit);

//다시 let으로 변수 선언하고 다시 선언을 하면 변수 오류가 난다.
//let fruit = 'hello';/*here*/ 


//var같은 경우는 변수를 선언을하고 다시 선언을 해도 오류가 안난다.
var variable1 = 'hello';
var variable1 = 'bye';


//최종적으로는 bye가 찍힌다.
console.log(variable1);
