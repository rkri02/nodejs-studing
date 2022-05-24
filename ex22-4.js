const fun1=setTimeout(() => console.log('Have'), 1000);
const fun2=setTimeout(() => console.log('a'), 2000);
const fun3=setTimeout(() => console.log('good'), 3000);
const fun4=setTimeout(() => console.log('day~'), 4000);


fun1;
fun2;
fun3;
fun4;
clearTimeout(fun2);

/*====================================================
clearTimeout() 함수는
setTimeout() 으로 설정된 것을 취소하는 역할을 담당한다.
====================================================*/