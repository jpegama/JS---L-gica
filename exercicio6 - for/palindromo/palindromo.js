const palavra = prompt("Digite uma palavra");
let palavraInvertida = "";

//texto - length para pegar o tamanho total (5) e o -1 para chegar na posição desejada (4)
for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}
if (palavra === palavraInvertida) {
  alert("Palindromo");
} else {
  alert(" não é um palindromo");
}
