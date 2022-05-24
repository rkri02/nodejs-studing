// define
const list1 = [1, 2, 3, 4, 5];
const list2 = [10, 20, 30, 40, 50];


// process
const ListNew1 = list1.map(item => item * 10);
ListNew1.forEach(item => console.log(item));


const ListNew2 = list2.map(item => item/5);
ListNew2.forEach(item => console.log(item));

/*=========================================
map()은 배열에 있는 모든 아이템에 map()함수의 
매개변수로 받은 함수를 적용시킨 배열을 반환한다.
=========================================*/