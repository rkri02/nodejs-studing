function sum(a, b) 
{
    return a + b;
}
  
const Result = (result) => 
{
console.log('결과는 ', result, '입니다.');
};
  
const calc = (calculationResult, callback) => 
{
callback(calculationResult);
};
  
calc(sum(5, 20), Result);

