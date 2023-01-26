/* Duas formas de fazer com uma funçaão nomeada e com uma função anônima*/
titulop.addEventListener("click",mostraMensagem);

function mostraMensagem(){
    console.log("Olá eu fui clicado");
}

titulop.addEventListener("click",function (){
    console.log("Olha só possso chamar uma função anônima.");
});

/*fim dos dois tipos*/ 

let botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",function(event){

    event.preventDefault();

    let form = document.querySelector("#form-adiciona");

    let paciente = obtemPacienteDoFormulario(form);

    let erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagemDeErro(erros);

        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    let mensagensErro = document.querySelector("#mensagem-erro");
    mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente){
    
    let pacienteTr = montaTr(paciente);
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagemDeErro(erros){
    let ul = document.querySelector("#mensagem-erro");
    //tipo um reset-apaga os elementos HTML da lista
    ul.innerHTML = "";
    //igual função for
    erros.forEach(function(erro){
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function obtemPacienteDoFormulario(form){

    let paciente = {
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc:calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){

    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
 
    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

    return pacienteTr;
}

function  montaTd(dado){

    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add("classe");

    return td;
}

function validaPaciente(paciente){

    let erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida");
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }
    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }
    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    return erros;
}