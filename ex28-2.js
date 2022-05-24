// define
const listEmployee = 
[
    { name: 'HONG', part:'영업부', salary: 4000 },
    { name: 'KIM', part: '인사부', salary: 5000 },
    { name: 'LEE', part: '총무부', salary: 6000 },
];
  

// process
const raisedSalary = listEmployee.map(employee => (employee.salary * 1.2));
raisedSalary.forEach(item => console.log('인상분:',item));

