function calcularPlantio() {
    const area = parseFloat(document.getElementById('inputArea').value);
    const possuiSombra = document.getElementById('selectSombra').value;
    const campoResultado = document.getElementById('resultadoCalculo');

    // Validação simples caso o usuário não digite nada
    if (!area || area <= 0) {
        campoResultado.innerHTML = `
            <div class="destaque" style="background-color: #ffcdd2; border-left-color: #d32f2f; color: #c62828;">
                ⚠️ Por favor, insira um valor de área válido e maior que zero.
            </div>`;
        return;
    }

    // Definição técnica de espaçamento padrão recomendado (Sistema Erva 20 / Embrapa)
    // Usando o espaçamento clássico de 3 metros entre linhas e 1 metro entre plantas = 3m² por planta.
    const metrosPorPlanta = 3; 
    const quantidadeMudas = Math.floor(area / metrosPorPlanta);

    let mensagemViabilidade = "";
    let corFundo = "";
    let corBorda = "";

    // Lógica para verificar se o terreno é ecologicamente próprio (Sustentabilidade)
    if (possuiSombra === "sim") {
        mensagemViabilidade = `
            <h3>✅ Terreno Altamente Recomendado!</h3>
            <p>Sua área possui cobertura de sombra natural, o que é perfeito para o cultivo do <strong>mate sombreado paranaense</strong>. Esse sistema protege a biodiversidade, evita a erosão e produz folhas de melhor qualidade comercial.</p>
            <p style="margin-top: 10px;"><strong>Estimativa de Plantio:</strong> Com base no espaçamento sustentável recomendado (3m x 1m), seu terreno de ${area}m² pode receber aproximadamente <strong>${quantidadeMudas} mudas</strong> de erva-mate.</p>
        `;
        corFundo = "#e8f5e9"; // Verde claro para sucesso
        corBorda = "#2e7d32";
    } else {
        mensagemViabilidade = `
            <h3>⚠️ Terreno Requer Atenção (Pleno Sol)</h3>
            <p>O cultivo em pleno sol é possível, porém exige maiores cuidados com o solo, controle de pragas e adubação intensa, além de não pontuar nos critérios de preservação da mata nativa.</p>
            <p style="margin-top: 10px;"><strong>Dica do Projeto:</strong> Para tornar seu terreno ideal, considere fazer um plantio consorciado com árvores nativas ou Araucárias!</p>
            <p style="margin-top: 10px;"><strong>Estimativa de Plantio:</strong> Respeitando o espaçamento, a área comporta cerca de <strong>${quantidadeMudas} mudas</strong>, mas recomendamos planejar faixas de sombreamento.</p>
        `;
        corFundo = "#fff3e0"; // Laranja/Amarelo claro para alerta
        corBorda = "#e65100";
    }

    // Exibe o resultado lindamente na tela dentro do padrão visual do site
    campoResultado.innerHTML = `
        <div class="destaque" style="background-color: ${corFundo}; border-left-color: ${corBorda}; text-align: left; transition: all 0.3s ease;">
            ${mensagemViabilidade}
        </div>
    `;
}