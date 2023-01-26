let titulop = document.querySelector(".titulop");
titulop.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente");

for (let i = 0;i < pacientes.length ; i++){

    let paciente = pacientes[i];

    let tdpeso = paciente.querySelector(".info-peso");
    let peso = tdpeso.textContent;

    let tdaltura = paciente.querySelector(".info-altura");
    let altura = tdaltura.textContent;

    let tdimc = paciente.querySelector(".info-imc");

    let peso_valido = validaPeso(peso);
    let altura_valida = validaAltura(altura);

    if(!peso_valido){
        console.log("peso invalido");
        peso_valido = false;
        tdimc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");

    }
    if(!altura_valida){
        console.log("altura invalida");
        altura_valida = false;
        tdimc.textContent = "Altura Inválida";
        paciente.style.backgroundColor = "red";
    }
    if (peso_valido && altura_valida){

        let imc = calculaImc(peso,altura);
        tdimc.textContent = imc;
    }
}

function validaPeso(peso){
    if (peso >= 0 && peso < 300){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if (altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

