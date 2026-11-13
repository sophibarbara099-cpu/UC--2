// um tecnico precisar regristar temperatura com vírgula decimal usando o teclado.

import PromptSync from "prompt-sync";
const entrada = PromptSync()
const temperatura = parseFloat (entrada("Digite uma temperatura"))
const temp_ajustada = Number(temperatura.replace(",","."))

console.log (temperatura (°C):", temperatura)
console.log("temperatura Registrada:",${temp_ajustada} °C
