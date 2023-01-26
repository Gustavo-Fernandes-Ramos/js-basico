let tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick",function(event){
    //this.remove(); para remover a tabela em si
    //event.target.remove(); para remover o td
    //.parentNode seleciona o pai da tag que é o alvo do double click
    event.target.parentNode.classList.add("fadeOut");
    //serve para fazer um evento esperar no caso:500 milisegundos para acontecer
    setTimeout(function(){
        event.target.parentNode.remove();
    },500);   
});