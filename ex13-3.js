// 메소드 안의 메소드 형식
function plus(a,b)
{
    return(a+b);
}

function product(a,b)
{
    return(a*b);
}

function calc(a,b,fun)
{
    return fun(a,b); //매게변수 형식안에 함수를 가진다.
}


console.log(calc(10,5,plus)); //calc를 호출한뒤 plus를 다시 호출한다
console.log(calc(10,5,product)); //calc를 호출한뒤 product를 다시 호출한다

