// o atendimento deseja coletar dados de identificação que antes eram anotados no papel.

import PromptSync from "prompt-sync";
const entrada = PromptSync()
const nome = entrada ("Digite seu nome")
const idade = parseInt(entrada("Digite sua idade"))
const bairro = entrada ("Digite seu bairro:")

console.log("nome",nome)
console.log("idade", idade)
console.log("bairro", bairro)

console.log(`ficha: $(nome) $(idade) | $(bairro`)