const date = new Date();
const dateToTimestamp = date.getTime();
const timestampToDate = new Date(date.getTime());
const timestampToInit = new Date(1);


console.log('Date to timestamp:', dateToTimestamp); //총 13자리의 숫자
console.log('Initial timestamp:', timestampToInit); //시작할떄의 최초날짜를 가르킨다.
console.log('Timestamp to date:', timestampToDate); //오늘의 날짜를 찍어준다.
