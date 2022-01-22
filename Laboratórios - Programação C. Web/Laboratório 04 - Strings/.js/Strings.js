function inverter(){
    let txt = document.getElementById("N1").value;

    let N = txt.length;
    let vetor = new Array(N);
    let nTXT = "";

    for(let i=0;i<N; i++)
    {
        vetor[i] = txt[N-(i+1)]
        nTXT = nTXT+ vetor[i];
    }

    document.getElementById("R").value = nTXT;
}

function vogais(){
    let txt = document.getElementById("N1").value;

    let N = txt.length;
    let vetor = new Array(N);
    let nTXT = "";

    for(let i=0;i<N; i++)
    {
        vetor[i] = txt[i];

        if(txt[i]=="a" ||txt[i]=="A" ||txt[i]=="e" ||txt[i]=="E" ||txt[i]=="i" ||txt[i]=="I" ||txt[i]=="O" ||txt[i]=="o" ||txt[i]=="u" || txt[i]=="U" || txt[i]=="É"|| txt[i]=="é")
        {
            vetor[i] = txt[i].bold();
        }

        nTXT = nTXT + vetor[i];
    }

    document.getElementById("R").innerHTML = nTXT;
}


function limpaTexto(palavras)
{
    let P ="";
    let nP = "";
    for(let i=0; i < palavras.length; i++)
    {
        let aux = new Array(palavras[i].length);
        P = palavras[i];

        if(P[P.length-1] == "," || P[P.length-1]== ".")
        {

            for(let j=0; j<P.length-1;j++)
            {
                aux[j]= P[j];
                nP = nP + aux[j];
            }
            palavras[i] = nP
        }
    }

    return palavras;

}


function tabela(){
    let txt = document.getElementById("N1").value;

    
    let palavras = txt.split(" ");
    let palavras1 = new Array(palavras.length);
    let vezes = new Array(palavras.length);

  
    for(let i = 0;i<palavras.length;i++)
    {
        palavras1[i] = palavras[i];
    }

    
    for(let i = 0;i<palavras.length;i++)
    {
        vezes[i]=0;
    }

    

    palavras = limpaTexto(palavras);

    for(let i=0; i<palavras.length;i++)
    {
        for(let j=0; j<palavras.length;j++)
        {
            if(palavras[j]== palavras1[i])
            {
                vezes[j]= vezes[j]+1;
            }
        } 
    }

    let nTXT = "<tr><th>Palavra:</th><th>  Ocorrências:</th></tr>" 

    for(let i=0; i<(palavras.length);i++)
    {
        nTXT = nTXT+ "<tr><th>"+palavras[i]+"</th><th>"+vezes[i]+"</th></tr>";
    }

    document.getElementById("R").innerHTML = nTXT;

}

function ocorrencias()
{
    let txt = document.getElementById("N1").value;
    let palavras = txt.split(" ");
    let palavras1 = new Array(palavras.length);
    let vezes = new Array(palavras.length);

    palavras= limpaTexto(palavras);

    for(let i = 0;i<palavras.length;i++)
    {
        palavras1[i] = palavras[i];
    }

    for(let i = 0;i<palavras.length;i++)
    {
        vezes[i]=0;
    }

    for(let i=0; i<palavras.length;i++)
    {
        for(let j=0; j<palavras.length;j++)
        {
            if(palavras[j]== palavras1[i])
            {
                vezes[j]= vezes[j]+1;
            }
        } 
    }

    let maior = Math.max.apply(null,vezes);
    let posição;

    console.log(maior);
    for(let i=0; i<vezes.length; i++)
    {
        if(vezes[i] == maior)
        {
            posição = i;
        }
    }
    

    document.getElementById("R").value = "A palavra "+palavras[posição]+" é a que teve mais ocorrências. Número de ocorrências = "+vezes[posição];
}  


function substituir()
{   
    let texto = document.getElementById("N1").value;
    let palavra = document.getElementById("N2").value;
    let Npalavra = document.getElementById("N3").value;

    let txt = texto.split(" ");

    for(let i=0; i<txt.length; i++)
    {
        if(txt[i]==palavra)
        {
            txt[i] = Npalavra;
            console.log(txt[i])
        }
    }

    let Ntxt ="";
    for(let i= 0; i<txt.length; i++)
    {
        Ntxt = Ntxt + " " + txt[i];
    }

    

    document.getElementById("R").value = Ntxt;
}



function diasDeVida()
{
    let date = document.getElementById("N1").value;

    let data = date.split("/");

    let ano = 2021 - data[2];
    let mes = 10 - data[1];
    let dia = 01 - data[0];
    
    resultado = ano*365 + mes*30 + dia; 

    console.log(resultado)

    document.getElementById("R").value = "Total de:"+resultado+" dias "

}


function extenso()
{
    let date = document.getElementById("N1").value;

    let data = date.split("/");

    let ano = data[2];
    let Nmes = data[1];
    let dia = data[0];
    let mes = "";

    if(Nmes == 1)
    {
        mes= "janeiro";
    }
    else{
        if(Nmes == 2)
        {
            mes= "fevereiro";
        }
        else{
            if(Nmes == 3)
            {
                mes= "março";
            }
            else{
                if(Nmes == 4)
                {
                    mes= "abril";
                }
                else{
                    if(Nmes == 5)
                    {
                        mes = "maio"
                    }
                    else{
                        if(Nmes == 6)
                        {
                            mes = "junho"
                        }
                        else{
                            if(Nmes == 7)
                            {
                                mes= "julho";
                            }
                            else{
                                if(Nmes == 8)
                                {
                                    mes = "agosto"
                                }
                                else{
                                    if(Nmes == 9)
                                    {
                                        mes ="setembro"
                                    }
                                    else{
                                        if(Nmes == 10)
                                        {
                                            mes="outubro"
                                        }
                                        else{
                                            if(Nmes == 11)
                                            {
                                                mes="novembro"
                                            }
                                            else{
                                                if(Nmes == 12)
                                                {
                                                    mes="dezembro"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    document.getElementById("R").value = dia+" de "+mes+" de "+ano;

}


function diferenca()
{
    let date1 = document.getElementById("N1").value;
    let date2 = document.getElementById("N2").value;

    let data1 = date1.split("/");
    let data2 = date2.split("/");

    dia1 = data1[0];
    mes1 = data1[1];
    ano1 = data1[2];

    dia2 = data2[0];
    mes2 = data2[1];
    ano2 = data2[2];

    Rdia = dia2 - dia1
    Rmes = mes2 - mes1
    Rano = ano2 - ano1

    let R = ((Rdia + (Rmes*30) + (Rano*365))/7)-0.5 ;

    document.getElementById("R").value = "A distância é de:"+R.toFixed(0)+" semanas";

}

function forca()
{
    let pw = document.getElementById("N1").value;
    let senha = pw.split("");
    let forca = [0,0,0];

    for(let i=0; i<senha.length;i++)
    {   
        if(senha[i]=="@" || senha[i]=="#" ||senha[i]=="!" ||senha[i]=="$" ||senha[i]=="%" ||senha[i]=="&" ||senha[i]=="*" ||senha[i]=="," ||senha[i]=="-" ||senha[i]=="+" ||senha[i]=="." ||senha[i]=="=" )
        {
            forca[2]=1;
        }
        else{
            if(senha[i]<=9 && senha[i]>=1)
            {
                forca[1]=1;
            }
            else{
                forca[0]=1;
            }
        }
    }

    console.log(forca[2]);
    console.log(senha)

    if(forca[2]==1 && forca[1]==1 && forca[0]==1 )
    {
        document.getElementById("R").style.color = "green";
        document.getElementById("R").value="Sua senha é forte";
    }
    else{
        if(forca[2]==0 && forca[1]==1 &&  forca[0]==1)
        {
            document.getElementById("R").style.color = "rgb(255,140,00)";
            document.getElementById("R").value="Sua senha é média";
        }
        else{
            if(forca[2]==0 && forca[1]==0 && forca[0]==1)
            {
                document.getElementById("R").style.color = "red";
                document.getElementById("R").value="Sua senha é fraca";
            }
            else{
                if(forca[2]==1 && forca[1]==1 && forca[0]==0 || forca[2]==1 && forca[1]==0 && forca[0]==0) 
                {
                    document.getElementById("R").style.color = "red";
                    document.getElementById("R").value="Sua senha é fraca";
                }
            }
        }
    }
}

function criptografia()
{
    let txt = document.getElementById("N1").value;
    let texto = txt.split("");
    let nTXT =  new Array(texto.length);

    for(let i=0; i<texto.length; i++)
    {
        nTXT[i] = txt[i];
    }


    for(let i=0; i<texto.length; i++)
    {

        if(texto[i]=="T")
        {
            nTXT[i]="P"
        }
        if(texto[i]=="t")
        {
            nTXT[i]="p"
        }
        if(texto[i]=="E")
        {
            nTXT[i]="O"
        }
        if(texto[i]=="e")
        {
            nTXT[i]="o"
        }

        if(texto[i]=="N")
        {
            nTXT[i]="L"
        }
        if(texto[i]=="n")
        {
            nTXT[i]="l"
        }

        if(texto[i]=="I")
        {
            nTXT[i]="A"
        }
        if(texto[i]=="i")
        {
            nTXT[i]="a"
        }

        if(texto[i]=="S")
        {
            nTXT[i]="R"
        }
        if(texto[i]=="s")
        {
            nTXT[i]="r"
        }

        if(texto[i]=="P")
        {
            nTXT[i]="T"
        }
        if(texto[i]=="p")
        {
            nTXT[i]="t"
        }

        if(texto[i]=="O")
        {
            nTXT[i]="E"
        }
        if(texto[i]=="o")
        {
            nTXT[i]="e"
        }

        if(texto[i]=="L")
        {
            nTXT[i]="N"
        }
        if(texto[i]=="l")
        {
            nTXT[i]="n"
        }

        if(texto[i]=="A")
        {
            nTXT[i]="I"
        }
        if(texto[i]=="a")
        {
            nTXT[i]="i"
        }

        if(texto[i]=="R")
        {
            nTXT[i]="S"
        }
        if(texto[i]=="r")
        {
            nTXT[i]="s"
        }
    }
    
    let R = "";
    for(let i=0; i<texto.length; i++)
    {
        R = R+nTXT[i];
    }

    document.getElementById("R").value= R;
}