function calcularPlantio() {
    const area = parseFloat(document.getElementById('inputArea').value);
    const possuiSombra = document.getElementById('selectSombra').value;
    const tipoRelevo = document.getElementById('selectRelevo').value;
    const campoResultado = document.getElementById('resultadoCalculo');

    // Validação de entrada
    if (!area || area <= 0) {
        campoResultado.innerHTML = `
            <div class="destaque" style="background-color: #ffcdd2; border-left-color: #d32f2f; color: #c62828;">
                ⚠️ Por favor, insira um valor de área válido e maior que zero.
            </div>`;
        return;
    }

    // Configurações técnicas (Padrão Embrapa / Sistema Erva 20)
    const metrosPorPlanta = 3; 
    const quantidadeMudas = Math.floor(area / metrosPorPlanta);

    let mensagemViabilidade = "";
    let corFundo = "";
    let corBorda = "";

    // 1. ANÁLISE DO SOMBREAMENTO
    if (possuiSombra === "sim") {
        mensagemViabilidade = `
            <h3>✅ Condição de Luz: Excelente para Sistema Sombreado!</h3>
            <p>A presença de árvores nativas ou Araucárias cria o ambiente perfeito. O mate sombreado reduz o estresse térmico da planta, preserva a umidade e gera um produto final menos amargo e de maior valor comercial.</p>
        `;
        corFundo = "#e8f5e9"; 
        corBorda = "#2e7d32";
    } else {
        mensagemViabilidade = `
            <h3>⚠️ Condição de Luz: Requer Cuidados (Pleno Sol)</h3>
            <p>O cultivo em pleno sol acelera o crescimento inicial, mas exige atenção redobrada com a desidratação do solo e adubação orgânica frequente para proteger as raízes.</p>
        `;
        corFundo = "#fff3e0"; 
        corBorda = "#e65100";
    }

    // 2. DIRECIONAMENTO E CUIDADOS DE ACORDO COM O RELEVO
    let dicasRelevo = "";
    if (tipoRelevo === "plano") {
        dicasRelevo = `
            <h4>🌱 Terreno Plano ou Suave: Fácil Manejo</h4>
            <p><strong>Vantagens:</strong> Baixo risco de erosão severa e excelente viabilidade para mecanização futura (uso de ferramentas elétricas ou podadeiras mecânicas).</p>
            <p><strong>Cuidados Especiais:</strong> Evite o acúmulo de água parada. A erva-mate detesta solos encharcados, que podem apodrecer as raízes. Garanta que o solo tenha uma boa drenagem natural.</p>
        `;
    } else {
        dicasRelevo = `
            <h4>⛰️ Terreno Inclinado / Morro: Atenção à Conservação</h4>
            <p><strong>Desafios:</strong> Alto risco de perda de nutrientes por enxurradas e maior dificuldade no transporte manual durante a colheita.</p>
            <p><strong>Cuidados Especiais (Essencial):</strong> O plantio <strong>DEVE</strong> ser feito em "Curvas de Nível" (linhas horizontais acompanhando o morro) para frear a descida da água da chuva. Além disso, mantenha o solo sempre coberto com folhas, palha ou mato roçado entre as linhas para evitar que a terra fértil seja lavada (erosão).</p>
        `;
    }

    // Juntando tudo na interface dentro do padrão visual do site
    campoResultado.innerHTML = `
        <div class="destaque" style="background-color: ${corFundo}; border-left-color: ${corBorda}; text-align: left; transition: all 0.3s ease;">
            ${mensagemViabilidade}
            
            <hr style="border: 0; border-top: 1px solid #ccc; margin: 15px 0;">
            
            <h3>📐 Capacidade e Espaçamento</h3>
            <p>Para a sua área de <strong>${area} m²</strong>, adotando as diretrizes sustentáveis recomendadas:</p>
            <ul style="margin-left: 20px; margin-top: 8px; line-height: 1.6;">
                <li><strong>Mudas estimadas:</strong> Cerca de <strong>${quantidadeMudas} plantas</strong>.</li>
                <li><strong>Espaçamento ideal:</strong> <strong>3 metros</strong> entre as fileiras e <strong>1 metro</strong> entre cada muda na mesma fileira.</li>
            </ul>

            <hr style="border: 0; border-top: 1px solid #ccc; margin: 15px 0;">

            <h3>🗺️ Diagnóstico Geográfico do Terreno e Dicas</h3>
            <div style="background-color: rgba(255,255,255,0.6); padding: 12px; border-radius: 6px; margin-top: 5px;">
                ${dicasRelevo}
            </div>

            <h3 style="margin-top: 15px;">✂️ Cronograma Técnico de Colheita</h3>
            <ul style="margin-left: 20px; margin-top: 8px; line-height: 1.6;">
                <li><strong>Primeira Poda (Formação):</strong> Realizar apenas entre o <strong>3º e 4º ano</strong> após o plantio, garantindo que a árvore esteja forte e estruturada.</li>
                <li><strong>Intervalo entre Colheitas:</strong> Respeitar a janela de <strong>18 a 24 meses</strong> de descanso para o matezal rebrotar com vigor e alta concentração de nutrientes.</li>
            </ul>
        </div>
    `;
}