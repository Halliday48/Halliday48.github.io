$(function(){
    
    let url = "https://rafaelescalfoni.github.io/desenv_web/receitas.json";
      
    $.get(url, function(cardapio){
      $.each(cardapio, function(index, receita){
        adicionaCardapio(receita);
      })
    })   
  });
  
      function adicionaCardapio(receita){
       
        let $nome = $("<h1>").text(receita.nome).addClass("nome");
        let $descricao = $("<p>").text(receita.descricao).addClass("descricao");
        let $foto = $("<img>").attr("src", receita.foto).addClass("foto").css("width", 200);
        let $tituloIngredientes = $("<h3>").text("Ingredientes").addClass("tituloIngredientes");
        let $tituloPreparo = $("<h3>").text("Modo de preparo").addClass("tituloPreparo");
        
        let $ordena = $("<ol>");
        for(let i = 0; i < receita.preparo.length; i++) {
          let $p = $("<li>").text(receita.preparo[i]);
          $ordena.append($p);
        }
       
        let $lista = $("<ul>");
        for(let i = 0; i < receita.ingredientes.length; i++) {
          let $I = $("<li>").text(receita.ingredientes[i]);
          $lista.append($I);
        } 
       
        let br = $("<hr>");
  
      
        $(".receitas").append($nome);
        $(".receitas").append($descricao);
        $(".receitas").append($foto);
        $(".receitas").append($tituloIngredientes);
        $(".receitas").append($lista);
        $(".receitas").append($tituloPreparo);
        $(".receitas").append($ordena);
        $(".receitas").append(br);
  }