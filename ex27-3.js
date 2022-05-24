const scores = [10, 20, 30, 40, 50];


const sum = scores.reduce((a, b) => (a + b));
const sum2 = scores.reduce((a, b) => (a + b), 10);


console.log('순수누적값 :', sum);
console.log('초기값포함 누적값 :', sum2);



var oneTwoThree=[1,2,3];
result = oneTwoThree.reduce((acc, cur, i) => 
{
    console.log('누적값:',acc,'현재값:', cur, '인덱스:',i);
    return acc + cur;
}, 0);


console.log('전체누적값:',result);

/*==============================================
reduce() 함수는 첫 번째 인덱스부터 마지막 인덱스까지 
누적 값  계산을 통해 하나의 결과를 내보내는 함수이다.
==============================================*/