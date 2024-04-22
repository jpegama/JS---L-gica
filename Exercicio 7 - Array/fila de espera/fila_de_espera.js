let fila = [];
let opcaoEscolhida = "";

do {
  let pacientes = "";
  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + ". " + fila[i] + "\n";
  }

  opcaoEscolhida = prompt(
    "Pacientes: \n" +
      pacientes +
      "\n\n O que deseja fazer?\n 1. Novo Paciente\n 2. Atender Paciente\n 3. Sair"
  );

  switch (opcaoEscolhida) {
    case "1":
      const novoPaciente = prompt("Digite o nome:");
      fila.push(novoPaciente);
      break;
    case "2":
      const pacienteConsultado = fila.shift();
      if (pacienteConsultado) {
        alert(pacienteConsultado + "foi removido da lista");
      } else {
        alert("Não há pacientes na fila");
      }
    case "3":
      alert("Encerrando");
      break;
    default:
      alert("Opção inválida");
      break;
  }
} while (opcaoEscolhida !== "3");
