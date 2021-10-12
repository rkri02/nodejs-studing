let A=10, B=5, op='+'; 
 

//연산자를 이용한 switch - case에 대한 문제    
switch(op)
{
    case '+' : 
        //문자열 표현
        console.log("더하기를 선택하셨습니다.  값은 %d입니다." , (A+B)); 
        //숫자 표현
        console.log("더하기를 선택하셨습니다.  값은 ",A+B,"입니다."); 
        break;
       
    case '-' : 
        console.log("빼기를 선택하셨습니다.  값은 %d입니다." , (A-B) ); 
        console.log("빼기를 선택하셨습니다.  값은 ",A-B,"입니다."); 
        break;
     
    case '*' : 
        console.log("곱하기를 선택하셨습니다.  값은 %d입니다.", (A*B)); 
        console.log("곱하기를 선택하셨습니다.  값은 ",A*B,"입니다."); 
        break;
     
    case '/' : 
        console.log("나누기를 선택하셨습니다.  값은 %d입니다.", (A/B) ); 
        console.log("나누기를 선택하셨습니다.  값은 ",A/B,"입니다."); 
        break;
    default : 
        console.log("잘못 누르셨습니다!" ); 
} // switch문을 닫아줌 

