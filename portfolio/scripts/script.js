
const NOME = "Otávio Gongra";
let tituloProfissional = "otaviog36";
let minhaBio = "Estudante de ADS na proz de Divinópolis - MG";
let anoFormatura = 2026;
let anoIngresso = 2025;
let indefinido;
let nulo = null;
let curso = {
    nome: "Análise e desenvolvimento de sistemas",
    semestre: 3,
    disciplinaAtual: "Linguagem de programação"
}

console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof anoFormatura);
console.log(typeof minhaBio);
console.log(typeof tituloProfissional);
console.log(typeof NOME);
console.log(typeof curso);

document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBio;
document.getElementById("anoFormatura").innerText = "Ano de formatura:" + ganoFormatura;