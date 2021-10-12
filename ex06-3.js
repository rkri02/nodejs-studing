let Price=3000, Price2;   

//기본적인 else if문이지만 {} 는 없다.  
   if (Price >= 10000) 
      Price2 = Price * 0.1;
   else if(Price >= 5000) 
      Price2 = Price * 0.05;
   else if(Price >= 3000) 
      Price2 = Price * 0.03;
   else if(Price >= 1000)  
      Price2 = Price * 0.01;
   else
      Price2 = 0;  
 
  //문자열로 들어오게 되고
  console.log("할인 가격은 %d 입니다" , (Price-Price2) );
  
  //숫자로 들어오게 된다.
  console.log("할인 가격은 ",Price-Price2," 입니다" );


