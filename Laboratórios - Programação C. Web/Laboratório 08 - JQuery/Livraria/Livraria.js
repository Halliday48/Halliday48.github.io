//função construtora de objetos Produto
function Livro(id, nome, autores, estilo){
	this.id = id;
	this.nome = nome;
	this.autores = autores;
	this.estilo = estilo;
}


// programar a remoção do livro no array listaLivros e sua remoção no DOM
function removerLivro(id)
{
	for(let i=0; i<listaLivros.length; i++)
	{
		if(listaLivros[i].id==id)
		{
			listaLivros.splice(i,1);
			console.log(listaLivros);
		}
	}
}

var id = 0;
var listaLivros = [];


$(function(){
	$("#adicionar").click(function(){
		
		let livro = new Livro(id,$("#titulo").val(), $("#autores").val(), $("#estilo").val())
		listaLivros.push(livro);
		console.log(listaLivros);

		var tituloLivro = $("#titulo").val();
		var autores = $("#autores").val();
		var estilo = $("#estilo").val();
		var descricao = $("#descricao").val();
		$("#acervo").append(
				$("<tr>")
					.append($("<td>").text(tituloLivro))
					.append($("<td>").text(autores))
					.append($("<td>").text(estilo))
					.append($("<td>").text(descricao))
					.append($("<td>")
						.append($("<a>")
								.attr("href", "#")
								.text("Apagar"))
								.attr("id",id)
								.attr("onclick", "removerLivro("+(id)+")")
					)
		)
		$("#titulo").val("");
		$("#autores").val("");
		$("#estilo").val("");
		id++;
	});

	$("#acervo").on("click", "a", function(){
		$(this).parents("tr").remove();
	})

	$("#apagarAcervo").click(function(){
		$("#acervo").empty();
		$("#acervo")
			.append($("<tr>")
						.append($("<th>").text("Título"))
						.append($("<th>").text("Autores"))
						.append($("<th>").text("Estilo"))
						.append($("<th>").text(""))
					)
	})

	$("#enviar").click(function(){
		//let url = "https://157.230.5.17/web/livros.php";// passarei para vocês mais tarde 
		
		let url = "http://httpbin.org/post";
		let dados = $("#dados").val();  //pegar o valor do input #dados 
		$.post(url, dados, function(data,status){
			alert("Data: " + data + "\nStatus: " + status);
		  }
		);
	})
	
});