let  a  =  0 ;
let  b  =  1 ;
let  c  =  0 ;

n = 100 ;

for(let i = 1; i <= n ; i ++ )
{
    c = a + b;
    b = a;
    a = c;
    console.log (a);
}