const baralho = [];
let opcaoEscolhida = "";
let qtdCartas = baralho.length;

do {
  opcaoEscolhida = prompt(
    "Cartas no baralho: " +
      qtdCartas +
      "\n\nO que deseja fazer?\n 1. Adicionar carta\n 2. Puxar carta\n 3. Sair"
  );

  switch (opcaoEscolhida) {
    case "1":
      const cartaAdicionada = prompt("Qual nome da carta a ser adicionada?");
      baralho.push(cartaAdicionada);
      break;
    case "2":
      const cartaRemovida = baralho.shift();
      if (cartaRemovida) {
        alert("A carta removida foi: " + cartaRemovida);
      } else {
        alert("Não há cartas no baralho");
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida");
  }
} while (opcaoEscolhida !== "3" || "Sair" || "sair");
