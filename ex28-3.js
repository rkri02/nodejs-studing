const students = 
[
    { name: 'HONG', score: 85 },
    { name: 'KIM', score: 95 },
    { name: 'LEE', score: 76 },
];
  
const scores = students.map(student => student.score);
  
const sum = scores.reduce((a, b) => a + b, 0);
console.log('sum:', sum);

