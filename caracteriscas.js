// =======================================================
// RECURSO: MENU HAMBÚRGUER (ABAS LATERAIS)
// =======================================================

const btnHamburguer = document.getElementById('btnMenuHamburguer');
const menuAbas = document.getElementById('menuAbas');
const btnFechar = document.getElementById('btnFecharMenu');
const mascaraFundo = document.getElementById('mascaraFundo');

// Função para abrir o painel lateral
function abrirMenu() {
    menuAbas.classList.add('aberto');
    mascaraFundo.classList.add('aberto');
}

// Função para fechar o painel lateral
function fecharMenu() {
    menuAbas.classList.remove('aberto');
    mascaraFundo.classList.remove('aberto');
}

// Ativa os cliques apenas se os elementos existirem na página
if (btnHamburguer && menuAbas && btnFechar && mascaraFundo) {
    btnHamburguer.addEventListener('click', abrirMenu);
    btnFechar.addEventListener('click', fecharMenu);
    mascaraFundo.addEventListener('click', fecharMenu);
}
