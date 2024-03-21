const primeiroNome = prompt ("informe seu nome")
const sobrenome = prompt ("informe seu sobrenome")
const campoDeEstudo = prompt ("informe seu campo de estudo")
const anoNascimento = prompt ("informe seu ano de nascimento")

alert(
    "Cadastrado!\n" + 
    "\nNome completo " + primeiroNome + "" + sobrenome +
    "\nCampo de estudo " + campoDeEstudo +
    "\nIdade " + (2022 - anoNascimento)
)