const N = {M:1000,CM:900, D:500,CD:400, C:100, XC:90,L:50, XL: 40, X:10, IX:9, V:5, IV:4, I:1};
function Nromano (num){
    let a = 0;
    let Convert = "";
    for(chave in N)
    {
         a = Math.floor(num/N [chave]);

        if(a >= 0){
            for(i=0;a > i; i++){
                Convert += chave;
                
            }
            num %= N [chave];
        }
    }
    return Convert
} 