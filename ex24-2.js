const countdown = (val) => 
{
    console.log('value:', val);
    if (val === 0) return val;
        return countdown(val - 1);
};
  
console.log('result:', countdown(10));


const Sum = (start, end, acc) => 
{
    if (start > end) return acc;
        return  Sum(start + 1, end,  acc + start);
};
      
console.log('누적값 :',Sum(1, 5, 0));
    
/*==========================================================
재귀함수란?
함수는 반드시 누군가에 의해서 호출(call)을 받아야 실행이 되는데 
이때 자기자신에 의해서 call을 받게 되는 개념을 재귀함수라고 한다.
==========================================================*/