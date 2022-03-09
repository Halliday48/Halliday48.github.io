window.onload = function () {

    let url = "https://hp-api.herokuapp.com/api/characters";

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(xhttp.readyState == 4 && xhttp.status == 200)
        {   
            let info = JSON.parse(xhttp.responseText);
            montaBody(info);
        } 
    }
    xhttp.open("GET", url)
    xhttp.send();
}

function montaBody (info)
{
    let body = document.getElementById("main");
    console.log(info)

   for(let i =0; i<info.length; i++)
   {
        if(info[i].image != "")
        {
            let div = document.createElement("div");
            div.className = "persona";
            div.style.textAlign = "center"

            div.innerHTML = 
            `<img src="${info[i].image}">
            <h3>${info[i].name}</h3>`;

            if(info[i].wizard == true)
            {
                div.innerHTML += `<i><p style="font-size:20px">Bruxo</p></i>`
            }
            else{
                div.innerHTML += `<i><p style="font-size:20px">Trouxa :(</p></i>`
            }

            let nascimento;
            if(info[i].dateOfBirth[0] == undefined)
            {
                nascimento =" Desconhecido";
            }
            else{
                nascimento = " " +  info[i].dateOfBirth[0] + info[i].dateOfBirth[1] + "/" + info[i].dateOfBirth[3] + info[i].dateOfBirth[4] + "/" + info[i].dateOfBirth[6]+info[i].dateOfBirth[7]+info[i].dateOfBirth[8]+info[i].dateOfBirth[9]
            }

            div.innerHTML += 
            `Casa: ${info[i].house}<br>
            Nascimento:  ${nascimento}<br> `;

            let spc;
            switch(info[i].species)
            {
                case "human":
                    spc = "Humano";
                    break;
                case "cat":
                    spc = "Gato";
                    break;
                case "half-giant":
                    spc = "Meio-gigante";
                    break;
                case "werewolf":
                    spc = "Lobisomem";
                    break;
                default:
                    spc = info[i].species
            }

            div.innerHTML += 
            `Espécie: ${spc}<br><br>`;

            body.appendChild(div);
            body.innerHTML += "<br>"
        }
    }


}