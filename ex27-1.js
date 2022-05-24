const nums = [5,1,8,10,11,13,16,19];


const res1 = nums.filter(no => no <= 10);
const res2 = nums.filter(no => no > 10);
const res3 = nums.filter(no => no >=5  && no <= 15);
const res4 = nums.filter(no => (no%2)==0);
const res5 = nums.filter(no => (no%2)==1);


console.log('10이하 :', res1);
console.log('10초과:', res2);
console.log('5와 15사이 :',  res3);
console.log('짝수 :',  res4);
console.log('홀수 :',  res5);

/*=====================================================================
filter() 메소드를 이용해서 배열에서 특정 조건을 가진 데이터를 추출할 수 있다.
=====================================================================*/