const usuarioCadastrado = "admin";
const senhaCadastrada = "1234";

let usuarioDigitado = "admin";
let senhaDigitada = "1234";

if (usuarioDigitado === usuarioCadastrado && senhaDigitada === senhaCadastrada) {
    console.log("Login efetuado com sucesso!");
} else {
    console.log("Usuário ou senha incorretos.");
}