const promiseResult = new Promise((resolve) => {
    resolve(1); // 핵심은 첫번째는 resolve() 를 쓴다는 것.
  }).then((result) => {
    console.log('first:', result);
    return `${result} hello`;
  }).then((result) => {
    console.log('second:', result);
    return `${result} hello`;
});
  
promiseResult.then(result => console.log(result));


/*====================================================================
프로미스(promise)는 자바스크립트 비동기 처리에 사용되는 객체.
Promise는 현재에는 당장 얻을 수는 없지만 
가까운 미래에는 얻을 수 있는 어떤 데이터에 접근하기 위한 방법을 제공합니다
====================================================================*/