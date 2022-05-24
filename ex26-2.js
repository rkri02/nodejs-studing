const isMenuIn = (num) => 
{
    if (num === 1) return true;
    else if(num === 2) return true;
    else if(num === 3) return true;
    else if(num === 4) return true;
    else
        return false;
}


if(isMenuIn(1)){
    console.log('메뉴에 있습니다');
}else{
    console.log('메뉴에 없습니다');  
}

console.log("======================")

const isEven = (num) => 
{
    if (num%2 === 0) return true;
    else
        return false;
}
if(isEven(10)){
    console.log('짝수입니다');
}else{
    console.log('홀수입니다');  
}
    

/*=================================================================
Predicate는 예측하다 라는 의미의 단어.
자바스크립트에서는 true인지 false인지 예측을 해준다는 의미로 사용됨.
즉, 함수이지만 true 또는 false를 리턴하는 함수를 프리디케이트라고 한다.
=================================================================*/