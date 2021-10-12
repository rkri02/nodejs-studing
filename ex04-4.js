const val1 = 100;
const val2 = 200;

// &&라서 두개다 참일때만 true를 나타낸다.
const con1 = val1 <= 30 && val2 >= 30;
const con2 = val1 <= 30 && val2 >= 100;
const con3 = val1 <= 40 && val2 >= 100;


// ||라 두개중 하나라도 참일경우 true로 나타낸다.
const con4 = val1 >= 30 || val2 >= 30;
const con5 = val1 >= 30 || val2 >= 100;
const con6 = val1 >= 40 || val2 >= 100;


console.log(con1);
console.log(con2);
console.log(con3);
console.log(con4);
console.log(con5);
console.log(con6);

