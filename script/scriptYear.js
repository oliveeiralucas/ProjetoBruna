function CalculaAno(dias) {
    let anos = Math.floor(dias / 365);
    let meses = Math.floor((dias % 365) / 30);
    let diasRestantes = (dias % 365) % 30;

    return anos + " anos " + meses + " meses e " + diasRestantes + " dias";
}

function CalcularAnosMesesDias() {
    const diasInput = document.getElementById("diasInput");
    const resultado = document.getElementById("resultado");
    const dias = parseInt(diasInput.value);

    if (isNaN(dias) || dias < 0) {
        resultado.textContent = "Insira um número válido e maior que 0 de dias.";
        return;
    }

    resultado.textContent = "Resultado: " + CalculaAno(dias);
}

function redirecionarParaHora() {
    window.location.href = "index.html";
}