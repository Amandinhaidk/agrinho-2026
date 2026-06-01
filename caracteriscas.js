// =======================================================
// RECURSO: MENU HAMBÚRGUER E NAVEGAÇÃO INTERNA (SPA)
// =======================================================

// Criamos a função fecharMenu do lado de fora para que os links do HTML consigam usá-la
function fecharMenu() {
    const menuAbas = document.getElementById('menuAbas');
    const mascaraFundo = document.getElementById('mascaraFundo');
    if (menuAbas && mascaraFundo) {
        menuAbas.classList.remove('aberto');
        mascaraFundo.classList.remove('aberto');
        console.log("Menu fechado com sucesso!");
    }
}

// NOVA FUNÇÃO: Esconde a seção atual e mostra a selecionada
function navegarPara(idDaSecao) {
    // 1. Procura a seção que está aberta no momento e esconde ela
    const secaoAtual = document.querySelector('.card.secao-ativa');
    if (secaoAtual) {
        secaoAtual.classList.remove('secao-ativa');
    }

    // 2. Encontra a nova seção clicada e mostra ela na tela
    const novaSecao = document.getElementById(idDaSecao);
    if (novaSecao) {
        novaSecao.classList.add('secao-ativa');
    }

    // 3. Fecha o menu lateral automaticamente após o clique
    fecharMenu();
}

// Aguarda todo o HTML da página ser carregado antes de configurar os cliques
document.addEventListener('DOMContentLoaded', () => {
    
    const btnHamburguer = document.getElementById('btnMenuHamburguer');
    const menuAbas = document.getElementById('menuAbas');
    const btnFechar = document.getElementById('btnFecharMenu');
    const mascaraFundo = document.getElementById('mascaraFundo');

    // Função interna para abrir
    function abrirMenu() {
        if (menuAbas && mascaraFundo) {
            menuAbas.classList.add('aberto');
            mascaraFundo.classList.add('aberto');
            console.log("Menu aberto com sucesso!");
        }
    }

    // Ativa os cliques apenas se os elementos existirem na página
    if (btnHamburguer && menuAbas && btnFechar && mascaraFundo) {
        btnHamburguer.addEventListener('click', abrirMenu);
        btnFechar.addEventListener('click', fecharMenu);
        mascaraFundo.addEventListener('click', fecharMenu);
    } else {
        console.error("Erro: Um ou mais elementos do menu não foram encontrados no HTML.");
    }
});
