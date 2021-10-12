const studentList = 
[
    { name: 'HONG', age: 20, ki: 180, weight: 75 },
    { name: 'KIM', age: 22, ki: 175, weight: 83 },
    { name: 'LEE', age: 23, ki: 177, weight: 78 },
];


const plus = (a, b) => a + b;
studentList.forEach(student => console.log('%s total:%d', student.name, plus(student.ki, student.weight)));
  
console.log('--------------------');


studentList.forEach((student) => 
{
    console.log('%s total:%d', student.name, plus(student.ki, student.weight));
});

