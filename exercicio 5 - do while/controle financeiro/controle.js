let valorDisponivel = prompt("Digite o valor disponivel: ")
let option =""
let adicionarValor
let valorFinal
let subtrairValor
contador = 0

do{
    option = prompt("Valor disponível = "+ valorDisponivel + "\nO que deseja fazer? \n1 - Adicionar dinheiro \n2 - Remover dinheiro \n3 - Encerrar")
    switch(option){
        case "1":
            adicionarValor = prompt("Qual a quantidade que deseja adicionar?")
            valorFinal = valorDisponivel + adicionarValor
            break
        case "2":
            subtrairValor = prompt("Qual a quantidade que deseja subtrair?")
            valorFinal = valorDisponivel - subtrairValor
            break
        case "3":
            alert("Sistema encerrado")
            break
    }
} while (option !== "3");