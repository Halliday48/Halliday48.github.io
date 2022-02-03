var Produto = function(id, nome, categoria, img, valorUnitario){
    this.id = id;
    this.nome = nome;
    this.categoria = categoria;
    this.foto = img;
    this.valorUnitario = valorUnitario;
}

function pesquisaPorId(vetor, objId)
{
	return vetor.find(
        function(item)
        {
		    return item.id === objId;
	    })
}

var cardapio = [new Produto(1, "Capuccino", "Bebidas Quentes", "https://rafaelescalfoni.github.io/desenv_web/img/capuccino.png",7)
			, new Produto(2, "Espresso", "Bebidas Quentes", "https://rafaelescalfoni.github.io/desenv_web/img/espresso.png",4)
			, new Produto(3, "Frapuccino", "Bebidas Quentes", "https://rafaelescalfoni.github.io/desenv_web/img/frapuccino.png",8)
			, new Produto(4, "Chococcino", "Bebidas Quentes", "https://rafaelescalfoni.github.io/desenv_web/img/chococcino.png",7)
			, new Produto(5, "Chocolate Quente", "Bebidas Quentes", "https://rafaelescalfoni.github.io/desenv_web/img/chocolate_quente.png",10)
			, new Produto(6, "Frapê", "Bebidas Frias", "https://rafaelescalfoni.github.io/desenv_web/img/frape.png",12)
			, new Produto(7, "Suco de Laranja", "Bebidas Frias", "https://rafaelescalfoni.github.io/desenv_web/img/suco_laranja.png",10)
            , new Produto(8, "Açaí", "Doces", "https://rafaelescalfoni.github.io/desenv_web/img/acai.png",12)
            , new Produto(9, "Bolo de Laranja", "Doces", "https://rafaelescalfoni.github.io/desenv_web/img/bolo_laranja.png",8)];
		
$(function(){
			
	var produtosEscolhidosArray = [];
   

	$.each(cardapio, function(ind, item){
        var itemLista = $("<li>");
        let br = $("<br>");
      
        itemLista.attr("id", item.id);
        itemLista.text(item.nome + " -  R$" +item.valorUnitario + ",00");
       
		$("#cardapio").append(itemLista);
        $("#cardapio").append(br);
	});

    //------------------------------------  
    let valorTotal = 0;
	$("#cardapio").on("click", "li",function(){
		var itemEscolhido = pesquisaPorId(cardapio, $(this).attr("id"));
     
        
        var pedidos = $("<li>").text(cardapio[$(this).attr("id")-1].nome +" - "+ "R$"+cardapio[$(this).attr("id")-1].valorUnitario+",00");
        valorTotal += cardapio[$(this).attr("id")-1].valorUnitario;
        console.log(valorTotal);
        $("#pedidos").append(pedidos);
        $("#valorTotal").html("Valor - R$"+valorTotal+",00");

	});
});