// =======================================================
// RECURSO: CONFIGURAÇÃO DE NAVEGAÇÃO E MENU LATERAL (SPA)
// =======================================================

// 1. FUNÇÕES GLOBAIS (Ficam de fora para o HTML conseguir chamar no 'onclick')

function fecharMenu() {
    const menuAbas = document.getElementById('menuAbas');
    const mascaraFundo = document.getElementById('mascaraFundo');
    if (menuAbas) menuAbas.classList.remove('aberto');
    if (mascaraFundo) mascaraFundo.classList.remove('aberto');
    console.log("Menu lateral recolhido.");
}

function navegarPara(idDaSecao) {
    // Procura a seção que está aberta e esconde
    const secaoAtual = document.querySelector('.card.secao-ativa');
    if (secaoAtual) {
        secaoAtual.classList.remove('secao-ativa');
    }

    // Procura a nova seção pelo ID e exibe
    const novaSecao = document.getElementById(idDaSecao);
    if (novaSecao) {
        novaSecao.classList.add('secao-ativa');
        // Rola a tela para o topo para o usuário ver o início da nova página
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Fecha o menu lateral automaticamente
    fecharMenu();
}

// 2. DISPARADOR DE CLIQUES SEGURO (Não anula outros scripts como o window.onload do quiz)
(function() {
    function inicializarMenu() {
        const btnHamburguer = document.getElementById('btnMenuHamburguer');
        const btnFechar = document.getElementById('btnFecharMenu');
        const mascaraFundo = document.getElementById('mascaraFundo');

        if (btnHamburguer) {
            btnHamburguer.onclick = function(e) {
                e.preventDefault();
                const menu = document.getElementById('menuAbas');
                const mascara = document.getElementById('mascaraFundo');
                if (menu) menu.classList.add('aberto');
                if (mascara) mascara.classList.add('aberto');
                console.log("Menu lateral expandido!");
            };
        }

        if (btnFechar) btnFechar.onclick = fecharMenu;
        if (mascaraFundo) mascaraFundo.onclick = fecharMenu;
    }

    // Executa imediatamente se o HTML já estiver pronto, ou aguarda o carregamento
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inicializarMenu);
    } else {
        inicializarMenu();
    }
})();