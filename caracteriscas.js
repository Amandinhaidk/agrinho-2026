// =======================================================
// RECURSO: MENU HAMBÚRGUER (ABAS LATERAIS)
// =======================================================

// Aguarda todo o HTML da página ser carregado antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {
    
    const btnHamburguer = document.getElementById('btnMenuHamburguer');
    const menuAbas = document.getElementById('menuAbas');
    const btnFechar = document.getElementById('btnFecharMenu');
    const mascaraFundo = document.getElementById('mascaraFundo');

    // Função para abrir o painel lateral
    function abrirMenu() {
        if (menuAbas && mascaraFundo) {
            menuAbas.classList.add('aberto');
            mascaraFundo.classList.add('aberto');
            console.log("Menu aberto com sucesso!"); // Linha de teste no console
        }
    }

    // Função para fechar o painel lateral
    function fecharMenu() {
        if (menuAbas && mascaraFundo) {
            menuAbas.classList.remove('aberto');
            mascaraFundo.classList.remove('aberto');
            console.log("Menu fechado com sucesso!"); // Linha de teste no console
        }
    }

    // Ativa os cliques apenas se os elementos existirem na página
    if (btnHamburguer && menuAbas && btnFechar && mascaraFundo) {
        btnHamburguer.addEventListener('click', abrirMenu);
        btnFechar.addEventListener('click', fecharMenu);
        mascaraFundo.addEventListener('click', fecharMenu);
    } else {
        // Alerta caso falte algum ID no seu HTML
        console.error("Erro: Um ou mais elementos do menu não foram encontrados no HTML.");
    }
});