const students = 
[
    { name: 'HONG', kor: 99, math: 85, eng: 87 },
    { name: 'KIM', kor: 100, math: 95, eng: 97 },
    { name: 'LEE', kor: 90, math: 76, eng: 84 },
];
  
const res1 = students.filter(student => student.math > 80);
const res2= students.filter(student => student.math > 90 && student.eng > 70);
  
console.log(res1);
console.log(res2);

