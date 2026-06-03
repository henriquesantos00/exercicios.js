const pessoas = [
    { nome: "ppa", idade: 16 },
    { nome: "joao leviski", idade: 22 },
    { nome: "maria grande", idade: 15 },
    { nome: "joao seco", idade: 18 },
    { nome: "mendes", idade: 30 }
];

const maioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18);

console.log("--- Lista de Pessoas Maiores de 18 Anos ---");
console.log(maioresDeIdade);