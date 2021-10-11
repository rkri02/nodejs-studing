let Menu='P';

//case가 2개씩 존재할경우
switch(Menu)
{
    case 'p' :
    case 'P' :
        console.log("Pizza를 주문하셨습니다." ); 
        break;
    case 's' :
    case 'S' :
        console.log("Spaghetti를 주문하셨습니다." ); 
        break;
    case 'r' :
    case 'R' :
        console.log("Risotto를 주문하셨습니다." ); 
        break;
    case 'd' :
    case 'D' :
        console.log("Drink를 주문하셨습니다." ); 
        break;
    default : 
        console.log("메뉴에 없습니다." ); 
} // switch문을 닫아줌

