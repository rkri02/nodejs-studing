var no = 1;
function fun0() 
{
    var no = 2; 
    function fun() 
    {
        console.log(no);
    }
    return fun;
}

var test = fun0();
test();
 

//합성함수는 함수 여러 개를 합쳐서 쓰는 방식
const multiple = x => x * 5;
const add = x => x + 10;

const plus = (a, b) => a + b;
const minus = (a, b) => a - b;

// (20 + 10) * 5
console.log(multiple(add(20)));

// (10 + 20) - 5
console.log(minus(plus(10, 20), 5));


/*=====================================================================
클로저는 내부함수가 참조하는 외부함수의 지역함수가 리턴 된 이후에도 유지될 때,
내부함수를 클로저라도 한다
=====================================================================*/