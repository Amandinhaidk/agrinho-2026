// 1. BANCO DE DADOS DO QUIZ (Array de Objetos)
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
            "Porque exige a derrubada de outras árvores para o sol entrar.",
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
        pergunta: "Como se chama a infusão de erva-mate preparada especificamente com água fria ou sumo de fruta, muito popular no Paraguai e no Brasil?",
        opcoes: [
            "Chimarrão",
            "Tereré",
            "Matcha"
        ],
        correta: 1
    },
    {
        categoria: "Conhecimento Geral",
        pergunta: "Qual é o nome do utensílio (uma espécie de palhinha de metal) utilizado para filtrar e beber a infusão diretamente do recipiente?",
        opcoes: [
            "Cabaça",
            "Filtro",
            "Bomba"
        ],
        correta: 1
    },
     {
        categoria: "Conhecimento Geral",
        pergunta: "Em qual das seguintes regiões a erva-mate NÃO é considerada uma bebida tradicional e diária de grande parte da população?",
        opcoes: [
            "Sul do Brasil",
            "Colômbia",
            "Argentina"
        ],
        correta: 1
    }
];


// Variáveis de controlo do progresso do jogo
let indicePerguntaAtual = 0;
let pontuacao = 0;

// 2. FUNÇÃO PARA MOSTRAR A PERGUNTA (Manipulação do DOM)
function renderizarPergunta() {
    const container = document.getElementById('quizContainer');
    if (!container) return;

    // Limpa o ecrã para receber a nova pergunta
    container.innerHTML = ''; 

    // Se o índice chegar ao fim do array (agora são 6 perguntas), termina o jogo
    if (indicePerguntaAtual >= perguntasQuiz.length) {
        exibirResultadoFinal();
        return;
    }

    const dadosAtuais = perguntasQuiz[indicePerguntaAtual];

    // [NOVO] CRIAÇÃO DA TAG DE CATEGORIA DINÂMICA
    const tagCategoria = document.createElement('span');
    tagCategoria.textContent = `Categoria: ${dadosAtuais.categoria}`;
    tagCategoria.style.display = 'inline-block';
    tagCategoria.style.marginBottom = '10px';
    tagCategoria.style.padding = '5px 10px';
    tagCategoria.style.borderRadius = '5px';
    tagCategoria.style.fontSize = '12px';
    tagCategoria.style.fontWeight = 'bold';

    // Condição para mudar a cor do selo baseado na categoria
    if (dadosAtuais.categoria === "Sobre o Projeto") {
        tagCategoria.style.backgroundColor = '#e3f2fd'; // Azul claro
        tagCategoria.style.color = '#0d47a1';           // Azul escuro
    } else {
        tagCategoria.style.backgroundColor = '#e8f5e9'; // Verde claro
        tagCategoria.style.color = '#1b5e20';           // Verde escuro
    }
    container.appendChild(tagCategoria);

    // Cria o título da pergunta
    const tituloPergunta = document.createElement('h3');
    tituloPergunta.textContent = `Pergunta ${indicePerguntaAtual + 1}: ${dadosAtuais.pergunta}`;
    tituloPergunta.style.marginTop = '5px';
    container.appendChild(tituloPergunta);

    // Cria os botões das alternativas
    dadosAtuais.opcoes.forEach((opcao, indice) => {
        const botaoOpcao = document.createElement('button');
        botaoOpcao.textContent = opcao;
        botaoOpcao.className = 'btn-opcao';
        
        botaoOpcao.style.display = 'block';
        botaoOpcao.style.margin = '10px 0';
        botaoOpcao.style.width = '100%';
        botaoOpcao.style.padding = '12px';
        botaoOpcao.style.textAlign = 'left';
        botaoOpcao.style.cursor = 'pointer';

        botaoOpcao.onclick = function() {
            verificarResposta(indice);
        };
        
        container.appendChild(botaoOpcao);
    });
}

// 3. FUNÇÃO PARA VERIFICAR A RESPOSTA
function verificarResposta(indiceSelecionado) {
    const respostaCorreta = perguntasQuiz[indicePerguntaAtual].correta;

    if (indiceSelecionado === respostaCorreta) {
        pontuacao++;
        alert('Parabéns, resposta correta! 🎉');
    } else {
        alert('Ops! Não foi dessa vez. Continue estudando a cultura do mate! 🌿');
    }

    indicePerguntaAtual++;
    renderizarPergunta();
}

// 4. FUNÇÃO DA TELA FINAL
function exibirResultadoFinal() {
    const container = document.getElementById('quizContainer');
    container.innerHTML = '';

    const tituloFim = document.createElement('h3');
    tituloFim.textContent = '🏆 Quiz Concluído!';
    
    const textoPontos = document.createElement('p');
    textoPontos.innerHTML = `Você acertou <strong>${pontuacao}</strong> de <strong>${perguntasQuiz.length}</strong> perguntas.`;

    const btnReiniciar = document.createElement('button');
    btnReiniciar.textContent = 'Jogar Novamente';
    btnReiniciar.style.padding = '10px 20px';
    btnReiniciar.style.cursor = 'pointer';
    btnReiniciar.style.marginTop = '15px';
    
    btnReiniciar.onclick = function() {
        reiniciarQuiz();
    };

    container.appendChild(tituloFim);
    container.appendChild(textoPontos);
    container.appendChild(btnReiniciar);
}

// 5. FUNÇÃO PARA REINICIAR
function reiniciarQuiz() {
    indicePerguntaAtual = 0;
    pontuacao = 0;
    renderizarPergunta();
}

// 6. ATIVAÇÃO DO BOTÃO INICIAL
const btnIniciar = document.getElementById('btnIniciarQuiz');
if (btnIniciar) {
    btnIniciar.onclick = function() {
        renderizarPergunta();
    };
}
