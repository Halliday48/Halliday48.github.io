window.onload = function () {
    let body = document.getElementsByTagName("body")[0];
    console.log(body);
    for (receita of receitasList) {
        body.appendChild(montaDiv(receita));
    }

}

function montaDiv(receita) {

    let divReceita = document.createElement("div");    
    divReceita.classList.add("divReceita");
    
    let receita1 = document.createElement("div");
    receita1.classList.add("receita1");
    
    let titulo = document.createElement("h3");
    let tituloText = document.createTextNode(receita.nome);
    
    let descricao = document.createElement("p");
    let descricaoText = document.createTextNode(receita.descricao);
    
    let foto = document.createElement("img");
    foto.src = receita.foto;

    titulo.appendChild(tituloText);
    descricao.appendChild(descricaoText);

    receita1.appendChild(titulo);
    receita1.appendChild(foto);
    receita1.appendChild(descricao);
    
    let receita2 = document.createElement("div");
    receita2.classList.add("receita2");


    let tituloIngredientes = document.createElement("h4");
    let tituloIngredientesText = document.createTextNode("Ingredientes:");
    tituloIngredientes.appendChild(tituloIngredientesText);
    receita2.appendChild(tituloIngredientes);

  
    let ul = document.createElement("ul");

    for(let i = 0; i < receita.ingredientes.length; i++) {
        
        let tituloPreparo = document.createElement("li");
        let tituloPreparoText = document.createTextNode(receita.ingredientes[i]);
        tituloPreparo.appendChild(tituloPreparoText);
        ul.appendChild(tituloPreparo);
    }    
    
    receita2.appendChild(ul);

    let tituloPreparo = document.createElement("h4");
    let tituloPreparoText = document.createTextNode("Preparo:");
    tituloPreparo.appendChild(tituloPreparoText);
    receita2.appendChild(tituloPreparo);



    let ol = document.createElement("ol");

    for(let i = 0; i < receita.preparo.length; i++) {
        
        let tituloPreparo = document.createElement("li");
        let tituloPreparoText = document.createTextNode(receita.preparo[i]);
        tituloPreparo.appendChild(tituloPreparoText);
        ol.appendChild(tituloPreparo);
    }    
    
    receita2.appendChild(ol);
  
/* ---------------------------------------------------*/

    divReceita.appendChild(receita1)
    divReceita.appendChild(receita2)
    
    let br = document.createElement("br");
    br.classList.add("br");
    divReceita.appendChild(br);
    

    let hr = document.createElement("hr");
    divReceita.appendChild(hr);

    
    return divReceita;
}