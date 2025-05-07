// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  // TODO: implementar função
  num1 = prompt ("Digite o primeiro numero:")
  num2 = prompt ("Digite o segundo numero:")
  operador = prompt ("Digite o primeiro numero(+, -, *, /):")
  if (typeof(a) && typeof(b) != Number){
    return("Erro: parâmetros inválidos")
  }
  if (operador == (0)){
    return("Erro: divisão por zero")
  }
  if (typeof(num1) && typeof(num2)){
    return("Erro: operação inválida")
  }
  
  switch(operador){
  case "+, -, *, /":
  return (resultado)
  }
}


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };