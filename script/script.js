function CalculaHora(minuto) {
    let horas = Math.floor(minuto / 60);
    let minutos = minuto % 60;
    return horas + " horas " + minutos + " minutos";
}

function CalcularHorasMinutos() {
    const minutosInput = document.getElementById("minutosInput");
    const resultado = document.getElementById("resultado");
    const minutos = parseInt(minutosInput.value);

    if(CalculaHora(minutos < 0 )){
        resultado.textContent = "Insira um número maior que 0";
        return;
    }
    if (!isNaN(minutos)) {
        resultado.textContent = "Resultado: " + CalculaHora(minutos);
    } else {
        resultado.textContent = "Por favor, insira um número válido de minutos.";
    }
}

function redirecionarParaAno() {
    window.location.href = "year.html";
}