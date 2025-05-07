// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)

function calcularIMC(peso, altura) {
  // TODO: implementar função
  altura = prompt ("Digite a altura:")
  peso = prompt ("Digite o peso:")
  
  let calculo = peso / (altura * altura)

  if (calculo < 18.5){
    return("Abaixo do peso")
  }
  if (calculo < 24.9 && 18.5){
    return("Peso normal")
  }
  if (calculo < 29.9 && 25){
    return("Sobrepeso")
  }
  if (calculo > 30){
    return("Obesidade")
  }
  if (typeof(altura) && typeof (peso) != Number){
    return("Erro")
  }
}



// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularIMC };