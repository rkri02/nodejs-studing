const add = x => y => x + y;
const add10 = add(10);


console.log(add10(40));
console.log(add(10)(50));

console.log("====================================");

const menu = piz1 => piz2 => `${piz1} ${piz2}`;

const combi = menu('combination');
const chicken = menu('chicken');

const menu1 = combi('pizza');
const menu2 = chicken('pizza');

console.log(menu1);
console.log(menu2);



/*=============================================================
커링이란??
여러개의 매개변수가 있을때 필요로 하는 매개변수를 만드는 기법이며, 
node.js는 비동기 실행이 많아서 callback을 인자로 넘겨 사용하는데 
커링을 사용하면 중복을 최소화 할수 있다.
수식을 표현하기에 아주 적합하며 재사용성이 좋으며
함수의 실행을 미룰수 있다.
=============================================================*/