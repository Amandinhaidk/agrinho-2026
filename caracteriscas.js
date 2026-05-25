//================================================================================================
//RECURSO: MENU DE TRÊS PONTINHOS(EXIBIR/OCULTAR ABA)
//================================================================================================

//1. MAPEIA OS ELEMENTOS DO HTML
const btnPontinhos =document.getElementById('btnPontinhos');
const abaCaracteristicas =document.getElementById('abaCaracteristicas')

//2.FUNÇÃO CONTROLADORA (muda o estado de exibição do elemento)
function alternarAbaCaracteristicas(){
    //Se a aba estiver escondida (none), ela aparece (block). Se ela estiver aparecendo, ela esconde.
    if (abaCaracteristicas.style.display === 'none') {
        abaCaracteristicas.style.display = 'block' ;
    } else {
        abaCaracteristicas.style.display = 'none';
    }
}

//3. EVENT LISTENER (Dispara a função ao clicar)
if (btnPontinhos && abaCaracteristicas) {
    btnPontinhos.addEventListener('click', alternarAbaCaracteristicas)
}