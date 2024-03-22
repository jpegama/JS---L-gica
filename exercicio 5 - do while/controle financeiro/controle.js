let valorDisponivel = parseFloat(prompt("Digite o valor disponivel: "))
let option =""

do{
    option = prompt("Valor disponível = "+ valorDisponivel +
    "\nO que deseja fazer?\n1 - Adicionar dinheiro \n2 - Remover dinheiro \n3 - Encerrar")
    switch(option){
        case "1":
            valorDisponivel += parseFloat(prompt("Qual a quantidade que deseja adicionar?"))
            break
        case "2":
            valorDisponivel -= parseFloat(prompt("Qual a quantidade que deseja adicionar?"))
            break
        case "3":
            alert("Sistema encerrado")
            break
        default:
            alert("Entrada inválida")
    }
} while (option !== "3");