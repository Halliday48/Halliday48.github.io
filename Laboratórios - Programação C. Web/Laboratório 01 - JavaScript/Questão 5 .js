let  Nome = NomeQualquer  (X) 

{
    for(let D = 2; D < X; D ++ )
    {
        if( X % D === 0 ) 
        
        {
            return  false ;
        }
    }
    return  true;
}

 function NomeQualquer2 (Y) 
{
    for(let T = 2; T <= Y; Y ++ ) 
    
    {
        if (NomeQualquer2 (Y) ) console.log (Y);
    }
}

NomeQualquer2 (1000);