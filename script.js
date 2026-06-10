// =======================================================
// RECURSO: BANCO DE DADOS E MOTOR DO QUIZ INTERATIVO
// =======================================================

const perguntasQuiz = [
    // --- CATEGORIA: SOBRE O PROJETO ---
    {
        categoria: "Sobre o Projeto",
        pergunta: "Qual é o principal benefício ambiental do projeto Carbon Matte na cultura da erva-mate?",
        opcoes: [
            "Aumentar o uso de tratores poluentes.",
            "Absorver e estocar CO₂ da atmosfera, ajudando a combater o aquecimento global.",
            "Substituir completamente a água da irrigação por produtos químicos."
        ],
        correta: 1
    },
    {
        categoria: "Sobre o Projeto",
        pergunta: "Qual doce misterioso foi criado pelos alunos para gerar memórias afetivas com a erva-mate?",
        opcoes: [
            "Bolo de fubá com cobertura de mate.",
            "Sorvete de erva-mate com calda de chocolate.",
            "Brigadeiro gourmet de erva-mate na casquinha de sorvete."
        ],
        correta: 2
    },
    {
        categoria: "Sobre o Projeto",
        pergunta: "Para que serve o QR Code instalado diretamente nas árvores de erva-mate?",
        opcoes: [
            "Para acessar redes sociais dos produtores.",
            "Para automação, registro de dados florestais e rastreabilidade no campo.",
            "Para conectar o celular à internet da fazenda."
        ],
        correta: 1
    },

    // --- CATEGORIA: TECNOLOGIAS DA EMBRAPA (Novas perguntas estratégicas) ---
    {
        categoria: "Tecnologias da Embrapa",
        pergunta: "Qual é o principal objetivo do Sistema Erva 20 desenvolvido pela Embrapa?",
        opcoes: [
            "Recomendar a troca da erva-mate por outras culturas.",
            "Duplicar ou triplicar a produtividade dos ervais de forma sustentável.",
            "Criar novos sabores de chimarrão usando química."
        ],
        correta: 1
    },
    {
        categoria: "Tecnologias da Embrapa",
        pergunta: "Qual praga regional que perfura o caule da planta foi destaque na mentoria do Dr. Ives?",
        opcoes: [
            "Broca da erva-mate",
            "Lagarta do cartucho",
            "Formiga cortadeira de folhas"
        ],
        correta: 0
    },

    // --- CATEGORIA: CONHECIMENTO GERAL ---
    {
        categoria: "Conhecimento Geral",
        pergunta: "Quem foram os primeiros povos a descobrir e utilizar as folhas da erva-mate para o consumo?",
        opcoes: [
            "Os colonizadores europeus quando chegaram ao Paraná.",
            "Os povos indígenas (principalmente os Guarani e Caingangue).",
            "Os imigrantes que fundaram as primeiras ervateiras."
        ],
        correta: 1
    },
    {
        categoria: "Conhecimento Geral",
        pergunta: "Cientificamente, qual é o nome da árvore que dá origem à erva-mate?",
        opcoes: [
            "Ilex paraguariensis",
            "Araucaria angustifolia",
            "Mateus paranaenses"
        ],
        correta: 0
    },
    {
        categoria: "Conhecimento Geral",
        pergunta: "Por que o cultivo da erva-mate sombreada (dentro da mata nativa) é considerado mais sustentável?",
        opcoes: [
            "Because exige a derrubada de outras árvores para o sol entrar.",
            "Idêntico ao cultivo tradicional no sol, sem diferenças ecológicas.",
            "Porque preserva a floresta nativa, protege a biodiversidade e mantém a qualidade do solo."
        ],
        correta: 2
    },
    {
        categoria: "Conhecimento Geral",
        pergunta: "A erva-mate é famosa por ser uma excelente fonte de energia. Qual é o principal composto estimulante presente nas suas folhas?",
        opcoes: [
            "Cafeína",
            "Taurina",
            "Ginseng"
        ],
        correta: 0
    },
    {
        categoria: "Conhecimento Geral",
        pergunta: "O nome mate deriva de qual termo e qual era o seu significado original?",
        opcoes: [
            "Mati (do quéchua, que significa cabaça/recipiente)",
            "Matis (do latim, que significa planta amarga)",
            "Mata (do espanhol, que significa folha)"
        ],
        correta: 0
    },
    {
        categoria: "Conhecimento Geral",
        pergunta: "Além do chimarrão e do tereré, como a erva-mate também é consumida mundialmente hoje em dia?",
        opcoes: [
            "Em cápsulas de café, chás e até em energéticos",
            "Fermentada como vinho",
            "Como tempero para carnes"
        ],
        correta: 0
    },
    {
        categoria: "Conhecimento Geral",
        pergunta: "Que famosa cidade catarinense é conhecida como a Capital Mundial da Erva-Mate?",
        opcoes: [
            "Blumenau",
            "Chapecó",
            "Canoinhas"
        ],
        correta: 2
    },
    {
        categoria: "Conhecimento Geral",
        pergunta: "A colheita da erva-mate costuma ser intensificada em qual estação do ano e por quê?",
        opcoes: [
            "No verão, para aproveitar o sol forte",
            "Nos meses mais frios, para garantir a maturação das folhas",
            "Na primavera, período de floração"
        ],
        correta: 1
    },
    {
        categoria: "Conhecimento Geral",
        pergunta: "O que significa uma erva-mate 'barbaquá'",
        opcoes: [
            "Um tipo de erva-mate que passa por um processo tradicional de moagem e defumação.",
            "Erva-mate cultivada à sombra.",
            "Uma erva-mate com sabor de canela e especiarias."
        ],
        correta: 0
    },
    {
        categoria: "Conhecimento Geral",
        pergunta: "Como se chama a infusão de erva-mate preparada especificamente com água fria ou sumo de fruta, muito popular no Paraguai e no Brasil?",
        opcoes: [
            "Chimarrão",
            "Tereré",
            "Matcha"
        ],
        correta: 1
    }
];

let indicePerguntaAtual = 0;
let pontuacao = 0;
let respondido = false; // Evita que o usuário clique em múltiplos botões na mesma pergunta

function renderizarPergunta() {
    const container = document.getElementById('quizContainer');
    if (!container) return;

    container.innerHTML = ''; 
    respondido = false;

    if (indicePerguntaAtual >= perguntasQuiz.length) {
        exibirResultadoFinal();
        return;
    }

    const dadosAtuais = perguntasQuiz[indicePerguntaAtual];

    // Selo de Categoria Dinâmico e Corrigido
    const tagCategoria = document.createElement('span');
    tagCategoria.textContent = dadosAtuais.categoria;
    tagCategoria.style.display = 'inline-block';
    tagCategoria.style.marginBottom = '12px';
    tagCategoria.style.padding = '6px 12px';
    tagCategoria.style.borderRadius = '20px';
    tagCategoria.style.fontSize = '12px';
    tagCategoria.style.fontWeight = 'bold';

    if (dadosAtuais.categoria === "Sobre o Projeto") {
        tagCategoria.style.backgroundColor = '#e3f2fd'; 
        tagCategoria.style.color = '#0d47a1'; 
    } else if (dadosAtuais.categoria === "Tecnologias da Embrapa") {
        tagCategoria.style.backgroundColor = '#f3e5f5';
        tagCategoria.style.color = '#4a148c';
    } else {
        tagCategoria.style.backgroundColor = '#e8f5e9'; // Verde Claro Verdadeiro
        tagCategoria.style.color = '#1b5e20';           // Verde Escuro Verdadeiro
    }
    container.appendChild(tagCategoria);

    // Pergunta
    const tituloPergunta = document.createElement('h3');
    tituloPergunta.textContent = `Pergunta ${indicePerguntaAtual + 1}: ${dadosAtuais.pergunta}`;
    tituloPergunta.style.marginTop = '5px';
    tituloPergunta.style.marginBottom = '15px';
    tituloPergunta.style.color = '#333';
    container.appendChild(tituloPergunta);

    // Container de Opções
    dadosAtuais.opcoes.forEach((opcao, indice) => {
        const botaoOpcao = document.createElement('button');
        botaoOpcao.textContent = opcao;
        botaoOpcao.className = 'btn-opcao';
        
        botaoOpcao.style.display = 'block';
        botaoOpcao.style.margin = '10px 0';
        botaoOpcao.style.width = '100%';
        botaoOpcao.style.padding = '14px';
        botaoOpcao.style.textAlign = 'left';
        botaoOpcao.style.cursor = 'pointer';
        botaoOpcao.style.border = '1px solid #ddd';
        botaoOpcao.style.borderRadius = '8px';
        botaoOpcao.style.backgroundColor = '#ffffff';
        botaoOpcao.style.fontSize = '15px';
        botaoOpcao.style.transition = 'all 0.2s ease';

        botaoOpcao.onclick = function() {
            if (!respondido) {
                verificarResposta(indice, botaoOpcao);
            }
        };
        
        container.appendChild(botaoOpcao);
    });
}

function verificarResposta(indiceSelecionado, botaoClicado) {
    respondido = true;
    const respostaCorreta = perguntasQuiz[indicePerguntaAtual].correta;
    const botoes = document.querySelectorAll('.btn-opcao');

    if (indiceSelecionado === respostaCorreta) {
        pontuacao++;
        botaoClicado.style.backgroundColor = '#c8e6c9'; // Verde feedback acerto
        botaoClicado.style.borderColor = '#388e3c';
        botaoClicado.style.color = '#1b5e20';
        botaoClicado.innerHTML += ' 🎉';
    } else {
        botaoClicado.style.backgroundColor = '#ffcdd2'; // Vermelho feedback erro
        botaoClicado.style.borderColor = '#d32f2f';
        botaoClicado.style.color = '#c62828';
        botaoClicado.innerHTML += ' ❌';

        // Mostra o botão correto de forma sutil para o aluno aprender
        botoes[respostaCorreta].style.backgroundColor = '#c8e6c9';
        botoes[respostaCorreta].style.borderColor = '#388e3c';
    }

    // Aguarda 1.5 segundo com os feedbacks na tela e passa para a próxima de forma suave
    setTimeout(() => {
        indicePerguntaAtual++;
        renderizarPergunta();
    }, 1500);
}

function exibirResultadoFinal() {
    const container = document.getElementById('quizContainer');
    container.innerHTML = '';

    const tituloFim = document.createElement('h3');
    tituloFim.textContent = '🏆 Desafio Concluído!';
    tituloFim.style.fontSize = '22px';
    tituloFim.style.color = '#2e7d32';
    
    const textoPontos = document.createElement('p');
    textoPontos.style.margin = '15px 0';
    textoPontos.style.fontSize = '16px';
    textoPontos.innerHTML = `Você acertou <strong>${pontuacao}</strong> de <strong>${perguntasQuiz.length}</strong> perguntas sobre o universo da Erva-Mate.`;

    const btnReiniciar = document.createElement('button');
    btnReiniciar.textContent = 'Jogar Novamente 🔄';
    btnReiniciar.className = 'botao'; // Usa a classe padrão que configuramos no CSS
    btnReiniciar.style.marginTop = '15px';
    
    btnReiniciar.onclick = function() {
        reiniciarQuiz();
    };

    container.appendChild(tituloFim);
    container.appendChild(textoPontos);
    container.appendChild(btnReiniciar);
}

function reiniciarQuiz() {
    indicePerguntaAtual = 0;
    pontuacao = 0;
    renderizarPergunta();
}

// Inicialização segura
document.addEventListener('DOMContentLoaded', () => {
    const btnIniciar = document.getElementById('btnIniciarQuiz');
    if (btnIniciar) {
        btnIniciar.onclick = function() {
            renderizarPergunta();
        };
    }
});