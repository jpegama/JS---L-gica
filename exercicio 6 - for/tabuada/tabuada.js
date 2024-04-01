const numero = parseFloat(prompt("Digite o número a ser multiplicado: "));
let resultados = "";

for (let multiplicador = 1; multiplicador <= 20; multiplicador++) {
  resultados +=
    numero + " x " + multiplicador + " = " + numero * multiplicador + "\n";
}
alert("Resultado da Tabuada de " + numero + ":\n\n" + resultados);
