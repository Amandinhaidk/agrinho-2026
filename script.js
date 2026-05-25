/**
 * 1. BANCO DE DADOS DO QUIZ (Array de Objetos)
 * Guarda as perguntas, opções e o índice da resposta correta.
 */
const perguntasQuiz = [
    {
        pergunta: "Qual é o principal benefício ambiental do projeto Carbon Matte na cultura da erva-mate?",
        opcoes: [
            "Aumentar o uso de tratores poluentes.",
            "Absorver e estocar CO₂ da atmosfera, ajudando a combater o aquecimento global.",
            "Substituir completamente a água da irrigação por produtos químicos."
        ],
        correta: 1 // Segunda opção é a correta
    },
    {
        pergunta: "Qual doce misterioso foi criado pelos alunos para gerar memórias afetivas com a erva-mate?",
        opcoes: [
            "Bolo de fubá com cobertura de mate.",
            "Sorvete de erva-mate com calda de chocolate.",
            "Brigadeiro gourmet de erva-mate na casquinha de sorvete."
        ],
        correta: 2 // Terceira opção é a correta
    },
    {
        pergunta: "Para que serve o QR Code instalado diretamente nas árvores de erva-mate?",
        opcoes: [
            "Para acessar redes sociais dos produtores.",
            "Para automação, registro de dados florestais e rastreabilidade no campo.",
            "Para conectar o celular à internet da fazenda."
        ],
        correta: 1 // Segunda opção é a correta
    }
];

// Variáveis de controle do estado do jogo (controlam a tela atual e os pontos)
let indicePerguntaAtual = 0;
let pontuacao = 0;

/**
 * 2. FUNÇÃO DE MANIPULAÇÃO DO DOM: Exibe a pergunta atual e as opções
 */
function renderizarPergunta() {
    const container = document.getElementById('quizContainer');
    
    // Limpa o conteúdo do container para atualizar a tela sem dar F5
    container.innerHTML = ''; 

    // Se o jogador respondeu a última pergunta, o jogo acaba e mostra o resultado
    if (indicePerguntaAtual >= perguntasQuiz.length) {
        exibirResultadoFinal();
        return;
    }

    // Pega os dados da pergunta de acordo com a posição atual no array
    const dadosAtuais = perguntasQuiz[indicePerguntaAtual];

    // Cria a tag <h3> para o texto da pergunta
    const tituloPergunta = document.createElement('h3');
    tituloPergunta.textContent = `Pergunta ${indicePerguntaAtual + 1}: ${dadosAtuais.pergunta}`;
    container.appendChild(tituloPergunta);

    // Cria os botões das alternativas usando um loop funcional (forEach)
    dadosAtuais.opcoes.forEach((opcao, indice) => {
        const botaoOpcao = document.createElement('button');
        botaoOpcao.textContent = opcao;
        botaoOpcao.className = 'btn-opcao';
        
        // Estilização básica aplicada diretamente via JavaScript para os botões do quiz
        botaoOpcao.style.display = 'block';
        botaoOpcao.style.margin = '10px 0';
        botaoOpcao.style.width = '100%';
        botaoOpcao.style.padding = '12px';
        botaoOpcao.style.textAlign = 'left';
        botaoOpcao.style.cursor = 'pointer';

        // Vincula o clique do botão à função que checa a resposta informando o índice clicado
        botaoOpcao.addEventListener('click', () => verificarResposta(indice));
        
        // Injeta o botão criado dentro da seção do quiz
        container.appendChild(botaoOpcao);
    });
}

/**
 * 3. FUNÇÃO LÓGICA: Verifica se o usuário clicou na alternativa certa
 */
function verificarResposta(indiceSelecionado) {
    const respostaCorreta = perguntasQuiz[indicePerguntaAtual].correta;

    // Se o índice do botão clicado for igual ao guardado no banco de dados, soma ponto
    if (indiceSelecionado === respostaCorreta) {
        pontuacao++;
        alert('Parabéns, resposta correta! 🎉');
    } else {
        alert('Ops! Não foi dessa vez. Continue estudando a cultura do mate! 🌿');
    }

    // Avança para a próxima pergunta e reconstrói o HTML na tela
    indicePerguntaAtual++;
    renderizarPergunta();
}

/**
 * 4. FUNÇÃO DE MANIPULAÇÃO DO DOM: Tela final do Quiz
 */
function exibirResultadoFinal() {
    const container = document.getElementById('quizContainer');
    container.innerHTML = ''; // Limpa a última pergunta da tela

    // Cria e exibe os elementos de encerramento
    const tituloFim = document.createElement('h3');
    tituloFim.textContent = '🏆 Quiz Concluído!';
    
    const textoPontos = document.createElement('p');
    textoPontos.innerHTML = `Você acertou <strong>${pontuacao}</strong> de <strong>${perguntasQuiz.length}</strong> perguntas.`;

    // Cria dinamicamente um botão para dar a opção de recomeçar
    const btnReiniciar = document.createElement('button');
    btnReiniciar.textContent = 'Jogar Novamente';
    btnReiniciar.style.padding = '10px 20px';
    btnReiniciar.style.cursor = 'pointer';
    
    // Configura o evento de clique para reiniciar os dados
    btnReiniciar.addEventListener('click', reiniciarQuiz);

    // Renderiza tudo na ordem correta
    container.appendChild(tituloFim);
    container.appendChild(textoPontos);
    container.appendChild(btnReiniciar);
}

/**
 * 5. FUNÇÃO DE CONTROLE: Reinicia os valores do jogo para o estado inicial
 */
function reiniciarQuiz() {
    indicePerguntaAtual = 0;
    pontuacao = 0;
    renderizarPergunta(); // Recomeça exibindo a primeira pergunta
}

// 6. EVENT LISTENER: Inicializa o botão de largada que está escrito no seu HTML original
const btnIniciar = document.getElementById('btnIniciarQuiz');
if (btnIniciar) {
    btnIniciar.addEventListener('click', renderizarPergunta);

/**
 * 4. FUNÇÃO DE MANIPULAÇÃO DO DOM: Tela final do Quiz
 */
function exibirResultadoFinal() {
    const container = document.getElementById('quizContainer');
    container.innerHTML = ''; // Limpa a última pergunta da tela

    // Cria e exibe os elementos de encerramento
    const tituloFim = document.createElement('h3');
    tituloFim.textContent = '🏆 Quiz Concluído!';
    
    const textoPontos = document.createElement('p');
    textoPontos.innerHTML = `Você acertou <strong>${pontuacao}</strong> de <strong>${perguntasQuiz.length}</strong> perguntas.`;

    // Cria dinamicamente um botão para dar a opção de recomeçar
    const btnReiniciar = document.createElement('button');
    btnReiniciar.textContent = 'Jogar Novamente';
    btnReiniciar.style.padding = '10px 20px';
    btnReiniciar.style.cursor = 'pointer';
    btnReiniciar.style.marginTop = '15px';
    
    // Configura o evento de clique para reiniciar os dados
    btnReiniciar.addEventListener('click', function() {
        reiniciarQuiz();
    });

    // Renderiza tudo na ordem correta
    container.appendChild(tituloFim);
    container.appendChild(textoPontos);
    container.appendChild(btnReiniciar);
}

/**
 * 5. FUNÇÃO DE CONTROLE: Reinicia os valores do jogo para o estado inicial
 */
function reiniciarQuiz() {
    indicePerguntaAtual = 0;
    pontuacao = 0;
    renderizarPergunta(); // Recomeça exibindo a primeira pergunta
}

// 6. EVENT LISTENER: Inicializa o botão de largada que está escrito no seu HTML original
const btnIniciar = document.getElementById('btnIniciarQuiz');
if (btnIniciar) {
    btnIniciar.addEventListener('click', function() {
        renderizarPergunta();
    });
}
}
