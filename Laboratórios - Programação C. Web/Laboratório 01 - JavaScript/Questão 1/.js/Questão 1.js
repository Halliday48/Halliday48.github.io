function fator (X)
{
    let resultado = X;
    for(let  i = X - 1 ;  i > 0 ; i -- )
    {
        resultado  *= i;
    }
     return resultado;
}
    console.log (fator(12));