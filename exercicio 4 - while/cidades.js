const nome = prompt("Qual seu nome?");
let cidades =""
contador = 0

let visitaCidade = prompt("Já visitou alguma cidade? Sim / Não")

while(visitaCidade === "Sim"){
    let cidade = prompt("Qual cidade visitada?")
    cidades += " - " + cidade
    contador++
    visitaCidade = prompt("Visitou alguma outra? Sim / Não")
}

alert(nome + " visitou: " + cidades)