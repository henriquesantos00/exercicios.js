let convidados = ["mendes", "joao seco", "meio kilo", "ppa", "maria grande"];

let nomeParaVerificar = "meio kilo";

if (convidados.includes(nomeParaVerificar)) {
    console.log("Pode entrar, você é convidado VIP!");
} else {
    console.log("Desculpe, seu nome não está na lista.");
}