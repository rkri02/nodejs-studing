const List = 
[
    { name: 'Hong Gil Dong', age: 20, ki: 180 },
    { name: 'Go Gil Dong', age: 23, ki: 150 },
    { name: 'Na Gil Dong', age: 21, ki: 160 },
];
  

//리스트 하나 하나를 유저로 받아와서 뿌려주는 작업
for (const user of List) 
{
    console.log('사용자 : ', user);
}
