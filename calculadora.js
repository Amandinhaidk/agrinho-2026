function calcularPlantio() {
    const area = parseFloat(document.getElementById('inputArea').value);
    const possuiSombra = document.getElementById('selectSombra').value;
    const tipoRelevo = document.getElementById('selectRelevo').value;
    const tipoSolo = document.getElementById('selectSolo').value;
    const campoResultado = document.getElementById('resultadoCalculo');

    if (!area || area <= 0) {
        campoResultado.innerHTML = `
            <div class="destaque" style="background-color: #ffcdd2; border-left-color: #d32f2f; color: #c62828;">
                ⚠️ Por favor, insira um valor de área válido e maior que zero.
            </div>`;
        return;
    }

    // 1. CÁLCULO DE MUDAS (Espaçamento 3x1m = 3m² por planta)
    const metrosPorPlanta = 3; 
    const quantidadeMudas = Math.floor(area / metrosPorPlanta);

    // 2. CÁLCULO FINANCEIRO ESTIMADO (Dados médios de produtividade da Embrapa)
    // Uma árvore adulta produz cerca de 10 kg de folhas por colheita.
    const quilosPorArvore = 10;
    const producaoTotalKg = quantidadeMudas * quilosPorArvore;
    
    // Considerando o preço médio de mercado de R$ 1,50 por quilo da erva-mate verde entregue na indústria
    const precoPorKg = 1.50; 
    const faturamentoEstimado = producaoTotalKg * precoPorKg;

    let mensagemViabilidade = "";
    let corFundo = "#e8f5e9"; 
    let corBorda = "#2e7d32";

    // 3. ANÁLISE DE SOMBREAMENTO
    if (possuiSombra === "sim") {
        mensagemViabilidade = `<h3>✅ Condição de Luz: Excelente para Sistema Sombreado!</h3>
            <p>Ambiente perfeito. O mate sombreado reduz o estresse térmico da planta, preserva a umidade e gera folhas de maior valor comercial.</p>`;
    } else {
        mensagemViabilidade = `<h3>⚠️ Condição de Luz: Requer Cuidados (Pleno Sol)</h3>
            <p>O cultivo em pleno sol acelera o crescimento inicial, mas exige atenção redobrada com a desidratação do solo e adubação orgânica frequente.</p>`;
        corFundo = "#fff3e0"; 
        corBorda = "#e65100";
    }

    // 4. ANÁLISE DO RELEVO
    let dicasRelevo = "";
    if (tipoRelevo === "plano") {
        dicasRelevo = `<strong>Topografia Plana:</strong> Baixo risco de erosão. Excelente viabilidade para o uso de ferramentas elétricas ou podadeiras mecânicas. Cuidado apenas para não acumular água na base.`;
    } else {
        dicasRelevo = `<strong>Topografia em Declive (Morro):</strong> Alto risco de perda de nutrientes em temporais. <strong>O plantio DEVE ser feito em Curvas de Nível</strong> (linhas horizontais) e o solo precisa ficar sempre coberto de palhada para evitar a erosão.`;
    }

    // 5. ANÁLISE DO SOLO
    let dicasSolo = "";
    if (tipoSolo === "argiloso") {
        dicasSolo = `<strong>Solo Argiloso (Terra Roxa):</strong> Muito fértil e ótimo para reter umidade. Cuide para não compactar a terra usando tratores pesados em dias de chuva.`;
    } else if (tipoSolo === "arenoso") {
        dicasSolo = `<strong>Solo Arenoso:</strong> Bem drenado, mas perde nutrientes facilmente com a água da chuva. Exige maior aplicação de esterco ou compostagem orgânica.`;
    } else {
        dicasSolo = `<strong>❌ ALERTA MÁXIMO (Solo Encharcado):</strong> A erva-mate <strong>não sobrevive</strong> em terrenos alagados ou banhados. As raízes apodrecem rapidamente. Recomendamos escolher outra área ou fazer uma drenagem profunda antes do plantio.`;
        corFundo = "#ffcdd2"; 
        corBorda = "#d32f2f";
    }

    // Montando a resposta completa na tela
    campoResultado.innerHTML = `
        <div class="destaque" style="background-color: ${corFundo}; border-left-color: ${corBorda}; text-align: left; transition: all 0.3s ease;">
            ${mensagemViabilidade}
            
            <hr style="border: 0; border-top: 1px solid #ccc; margin: 15px 0;">
            
            <h3>📐 Capacidade e Espaçamento</h3>
            <p>Para a sua área de <strong>${area} m²</strong>, adotando as diretrizes técnicas:</p>
            <ul style="margin-left: 20px; margin-top: 5px; line-height: 1.6;">
                <li><strong>Mudas estimadas:</strong> Cerca de <strong>${quantidadeMudas} plantas</strong>.</li>
                <li><strong>Espaçamento ideal:</strong> 3 metros entre fileiras e 1 metro entre plantas.</li>
            </ul>

            <hr style="border: 0; border-top: 1px solid #ccc; margin: 15px 0;">

            <h3>🗺️ Diagnóstico Físico do Terreno</h3>
            <ul style="margin-left: 20px; margin-top: 5px; line-height: 1.6;">
                <li>${dicasRelevo}</li>
                <li style="margin-top: 8px;">${dicasSolo}</li>
            </ul>

            <hr style="border: 0; border-top: 1px solid #ccc; margin: 15px 0;">

            <h3>💰 Projeção Econômica do Erval (Futuro)</h3>
            <p>Estimativa com base em plantas adultas em manejo sustentável:</p>
            <ul style="margin-left: 20px; margin-top: 5px; line-height: 1.6;">
                <li><strong>Produção esperada por colheita:</strong> Cerca de <strong>${producaoTotalKg.toLocaleString('pt-BR')} kg</strong> de folhas verdes.</li>
                <li><strong>Faturamento bruto estimado:</strong> <span style="color: #2e7d32; font-weight: bold;">R$ ${faturamentoEstimado.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span> (Calculado a R$ ${precoPorKg.toFixed(2)}/kg).</li>
            </ul>
            <p style="font-size: 12px; color: #555; margin-top: 8px;">*Nota: Os valores são estimativas de mercado e podem variar conforme a cotação local em Bituruna e a idade do erval.</p>
        </div>
    `;
}