// =======================================================
// RECURSO: MENU DE TRÊS PONTINHOS 
// =======================================================

const btnPontinhos = document.getElementById('btnMenuPontinhos');
const abaCaracteristicas = document.getElementById('abaCaracteristicas');

function alternarAbaCaracteristicas() {
    // Pega o estilo atual da aba que está sendo aplicado pelo CSS
    const estiloAtual = window.getComputedStyle(abaCaracteristicas).display;

    if (estiloAtual === 'none') {
        abaCaracteristicas.style.display = 'block';
        btnPontinhos.classList.add('aberto'); // Adiciona a classe que o CSS pinta de verde
    } else {
        abaCaracteristicas.style.display = 'none';
        btnPontinhos.classList.remove('aberto'); // Remove a classe e volta para o grafite
    }
}

if (btnPontinhos && abaCaracteristicas) {
    btnPontinhos.addEventListener('click', alternarAbaCaracteristicas);
}
