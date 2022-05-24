const Arrays = ['바나나','사과','귤','오렌지','딸기'];


console.log(Arrays);


// pop() 함수 사용
console.log(Arrays.pop());
console.log(Arrays);


// push() 함수 사용
Arrays.push('토마토');
console.log(Arrays);

/*===================================
pop() 배열의 마지막 아이템을 제거.
push() 배열의 끝에 아이템을 추가.
===================================*/




const serchStr = '오렌지';
  
for (let i = 0; i <  Arrays.length; i++) {
    if (serchStr === Arrays[i]) 
    {
        console.log('찾는 것은 ',serchStr, '입니다');
        break;
    }
}
  
