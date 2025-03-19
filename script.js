function incrementarJuros(valor, percentualDeJuros) {
    const incremento = (percentualDeJuros / 100) * valor;
    return valor + incremento;
  }
  
  function mostrarGrafico() {
    const valor = parseFloat(document.getElementById("valor").value);
    const juros = parseFloat(document.getElementById("juros").value);
    const barraValor = document.getElementById("barraValor");
    const barraFinal = document.getElementById("barraFinal");
    const resultado = document.getElementById("resultado");
  
    if (isNaN(valor) || isNaN(juros) || valor <= 0 || juros < 0) {
      resultado.textContent = "Por favor, insira valores válidos.";
      barraValor.style.height = '0';
      barraFinal.style.height = '0';
      return;
    }
  
    const valorFinal = incrementarJuros(valor, juros);
  
    // 🧮 Cálculo proporcional
    const alturaMaxima = 180; // altura máxima do gráfico (px)
    const maiorValor = Math.max(valor, valorFinal);
    const alturaValor = (valor / maiorValor) * alturaMaxima;
    const alturaFinal = (valorFinal / maiorValor) * alturaMaxima;
  
    // Atualiza as barras com altura proporcional
    barraValor.style.height = `${alturaValor}px`;
    barraValor.textContent = `R$ ${valor.toFixed(2)}`;
  
    barraFinal.style.height = `${alturaFinal}px`;
    barraFinal.textContent = `R$ ${valorFinal.toFixed(2)}`;
  
    resultado.textContent = `Você teve um acréscimo de R$ ${(valorFinal - valor).toFixed(2)} com ${juros}% de juros.`;
  }
  