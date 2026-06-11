
function fecharMenu() {
    const menuAbas = document.getElementById('menuAbas');
    const mascaraFundo = document.getElementById('mascaraFundo');
    if (menuAbas) menuAbas.classList.remove('aberto');
    if (mascaraFundo) mascaraFundo.classList.remove('aberto');
    console.log("Menu lateral recolhido.");
}

function navegarPara(idDaSecao) {
    const secaoAtual = document.querySelector('.card.secao-ativa');
    if (secaoAtual) {
        secaoAtual.classList.remove('secao-ativa');
    }

    const novaSecao = document.getElementById(idDaSecao);
    if (novaSecao) {
        novaSecao.classList.add('secao-ativa');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    fecharMenu();
}

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

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inicializarMenu);
    } else {
        inicializarMenu();
    }
})();