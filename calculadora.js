function calcularPlantio() {
    const area = parseFloat(document.getElementById('inputArea').value);
    const possuiSombra = document.getElementById('selectSombra').value;
    // CORREÇÃO: Capturando o nível de sombra do HTML (certifique-se de que o ID existe no seu HTML)
    const nivelSombra = document.getElementById('selectNivelSombra') ? document.getElementById('selectNivelSombra').value : ""; 
    
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

    const metrosPorPlanta = 3.5; 
    const quantidadeMudas = Math.floor(area / metrosPorPlanta);

    const quilosPorArvore = 10;
    const producaoTotalKg = quantidadeMudas * quilosPorArvore;
    
    const precoPorKg = 1.50; 
    const faturamentoEstimado = producaoTotalKg * precoPorKg;

    let mensagemViabilidade = "";
    let corFundo = "#e8f5e9"; 
    let corBorda = "#2e7d32";

    // CORREÇÃO: Estrutura if/else corrigida e identada corretamente
    if (possuiSombra === "não") {
        mensagemViabilidade = `<h3>☀️ Condição de Luz: Pleno Sol</h3>
            <p>O cultivo em pleno sol acelera o crescimento inicial, mas exige atenção redobrada com a desidratação do solo e adubação orgânica frequente</p>`;
        corFundo = "#fff3e0";
        corBorda = "#e65100";
    } else {
        // Se possui sombra, avalia o nível
        if (nivelSombra === "muita") {
            mensagemViabilidade = `<h3>🌳 Condição de Luz: Muita Sombra (Mata Fechada)</h3>
                <p>O ambiente protege 100% o ecossistema, porém, sombra excessiva pode diminuir o ritmo de crescimento e a produtividade das folhas <strong>Recomendação:</strong> Avalie fazer uma poda leve de condução nos galhos das árvores mais altas para deixar um pouco de luz filtrada entrar.</p>`;
            corFundo = "#e8f5e9"; 
            corBorda = "#1b5e20";
        } else if (nivelSombra === "média") {
            mensagemViabilidade = `<h3>✅ Condição de Luz: Sombra Média (O Cenário Ideal!)</h3>
                <p>Este é o melhor cenário do <strong> Sistema Erva 20 e manejo sustentável</strong>! A luz filtrada na medida certa garante folhas com um tom verde-escuro intenso, com menor amargor, alta qualidade comercial e crescimento equilibrado</p>`;
            corFundo = "#e8f5e9"; 
            corBorda = "#2e7d32";
        } else if (nivelSombra === "pouca") {
            mensagemViabilidade = `<h3>🌱 Condição de Luz: Pouca Sombra (Sombra Rala.)</h3>
                <p>A proteção ambiental existe, mas é baixa. As plantas receberão bastante sol direto em alguns períodos do dia. Recomenda-se enriquecer a área futuramente com o plantio de mais Araucárias ou mudas nativas nas falhas do terreno.</p>`;
            corFundo = "#e8f5e9"; 
            corBorda = "#0366d6";
        }
    }

    let dicasRelevo = "";
    if (tipoRelevo === "plano") {
        dicasRelevo = `<strong>Topografia Plana:</strong> Baixo risco de erosão. Excelente viabilidade para o uso de ferramentas elétricas ou podadeiras mecânicas. Cuidado apenas para não acumular água na base.`;
    } else {
        dicasRelevo = `<strong>Topografia em Declive (Morro):</strong> Alto risco de perda de nutrientes em temporais. <strong>O plantio DEVE ser feito em Curvas de Nível</strong> (linhas horizontais) e o solo precisa ficar sempre coberto de palhada para evitar a erosão.`;
    }

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

    campoResultado.innerHTML = `
        <div class="destaque" style="background-color: ${corFundo}; border-left-color: ${corBorda}; text-align: left; transition: all 0.3s ease;">
            ${mensagemViabilidade}
            
            <hr style="border: 0; border-top: 1px solid #ccc; margin: 15px 0;">
            
            <h3>📐 Capacidade e Espaçamento</h3>
            <p>Para a sua área de <strong>${area} m²</strong>, adotando as diretrizes técnicas:</p>
            <ul style="margin-left: 20px; margin-top: 5px; line-height: 1.6;">
                <li><strong>Mudas estimadas:</strong> Cerca de <strong>${quantidadeMudas} plantas</strong>.</li>
                <li><strong>Espaçamento ideal:</strong> 3,5 metros entre fileiras e 1,5 metro entre plantas.</li>
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