const num1 = prompt("primeiro numero")
const num2 = prompt("segundo numero")

const x = parseFloat (num1) 
const y = parseFloat (num2)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x/y

alert(
    "Resultados:\n" +
    "\nSoma: " + soma +
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão: " + divisao
  )
