let i; 
for(i=1; i<=10 ; i++)
{     
     console.log(i);   
} 


console.log("===========");  


for(i=10; i>=0 ; i--)
{     
         console.log(i);   
}   
    

console.log("===========");  


let hap=0; 
for(i=1; i<=10 ; i++)
{
     hap=hap+i;
}  
console.log('1부터 10까지 합은 %d입니다.', hap);

console.log("===========");  


for (let j = 2; j <= 3; j += 1) 
{
        console.log('====  %d단====', j);
        for (let i = 1; i <= 9; i += 1) 
    {
          console.log('%d * %d = %d', j, i, j * i);
    }
}
    
