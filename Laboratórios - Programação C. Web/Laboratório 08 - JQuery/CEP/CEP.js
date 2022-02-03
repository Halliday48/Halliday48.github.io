$(function(){
    
    $("#buscaEndereco").click(function(){
        var url = "https://viacep.com.br/ws/";
        var cep = $("#cep").val(); 
        url += cep + "/json/";
        $.get(url, function(data, status){
         
            $(".endereco-logradouro").text("Logradouro: "+ data.logradouro);
            $(".endereco-bairro").text("Bairro: " + data.bairro);
            $(".endereco-cidade").text("Cidade: " + data.localidade);
            $(".endereco-estado").text("Estado: " + data.uf);
            
        })
    })
    
});