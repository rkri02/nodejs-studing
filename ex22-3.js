// 1초에 1번씩 'hello'출력하기
let i=0;
const playInterval = setInterval(() => {
    i++;
    console.log('hello %d',i);}, 1000);



setTimeout(() => { clearInterval(playInterval);}, 11000);

/*==========================================
clearInterval() 함수를 받으면 해당 함수를 종료시킨다
setInterval()로 반복중인 작업을 중지할 수 있다
==========================================*/