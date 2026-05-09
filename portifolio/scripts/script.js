//Botão Modo claro/escuro - 30/04/26 ---------------------------------------------------------------------------------

const botao = document.getElementById("modoClaroEscuro");
console.log(botao);

    let claro = true;
    botao.addEventListener("click", function() {
    if (claro) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white"
        botao.textContent = "Modo Escuro";
        claro = true;
    }else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black"
        botao.textContent = "Modo Claro";
        claro = false;
    }
    claro = !claro;
});
//--------------------------------------------------------------------------------------------------------------------
//Cálculo Data Formatura - 04/05/26 ----------------------------------------------------------------------------------
// Dados Pessoais-----------------------------------------------------------------------------------------------------
const NOME = "Otávio Gongra";
let tituloProfissional = "otaviog36";
let minhaBio = "Estudante de ADS na proz de Divinópolis - MG";
let anoFormatura = 2026;
let mesFormatura = 12;
let diaFormatura = 30;
let anoIngresso = 2025;
let mesIngresso = 1;
let diaIngresso = 1;
//Utilização do Date--------------------------------------------------------------------------------------------------
let dataAtual = new Date();
let mesAtual = dataAtual.getMonth() + 1; // Começa por 0, por isso do +1
let anoAtual = dataAtual.getFullYear();
let diaAtual = dataAtual.getDate();
let hoje = diaAtual + mesAtual + anoAtual;
//--------------------------------------------------------------------------------------------------------------------
let indefinido;
let nulo = null;
let curso = {
    nome: "Análise e desenvolvimento de sistemas",
    semestre: 3,
    disciplinaAtual: "Linguagem de programação"
};

console.log(typeof anoFormatura);
console.log(typeof NOME);
console.log(typeof tituloProfissional);
console.log(typeof minhaBio);
console.log(typeof anoIngresso);
console.log(typeof indefinido);
console.log(typeof nulo);
console.log(typeof curso);
//Calculo-------------------------------------------------------------------------------------------------------------
let anoRestante = anoFormatura - anoAtual;
let mesRestante = mesFormatura - mesAtual;
let diaRestante = diaFormatura - diaAtual;
//--------------------------------------------------------------------------------------------------------------------
console.log(typeof anoRestante);
console.log(typeof mesRestante);
console.log(typeof diaRestante);

document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBio;
document.getElementById("anoFormatura").innerText = `Formatura prevista para: ${diaFormatura}/${mesFormatura}/${anoFormatura}`;
document.getElementById("anoInfresso").innerText = `Ano de Ingresso: ${anoIngresso}`;
document.getElementById("curso").innerText = `Curso: ${curso.nome} - Semestre: ${curso.semestre}`;
document.getElementById("tempoRestanteParaFormatura").innerText = 
`Tempo restante para a formatura: ${anoRestante} ano(s), ${mesRestante} meses e ${diaRestante} dias`;
//condicionais if+switch - 06/05/26-----------------------------------------------------------------------------------
if (anoFormatura - anoAtual <= 0) {
    document.getElementById("tempoRestanteParaFormatura").innerText = `Tempo restante para a formatura: ${mesRestante} meses e ${diaRestante} dias`;
}else if(anoFormatura - anoAtual === 1) {
    document.getElementById("tempoRestanteParaFormatura").innerText = 'Tempo restante para formatura: ${anoFormatura - anoAtual} ano';
}else{
    document.getElementById("tempoRestanteParaFormatura").innerText = 'Tempo restante para formatura: ${anoFormatura - anoAtual} anos';
}

if (diaRestante <= 0 && mesesRestantes <= 0 && anoRestante <=0) {
    document.getElementById("tempoRestanteParaFormatura").innerText = 'Curso Concluído';
}

let nota = 8;
let aprovado = (nota>=6)? "Aprovado" : "Reprovado";

document.write(`<p> Nota: ${nota} - ${aprovado}</p>`);

let diaSemana = dataAtual.getDay()+1; //+1 pois inicia por zero que é um valor inexistente dentro dos dias da semana(começa por 1)

let diaEscrito;

switch(diaSemana) {
    case 1: diaEscrito = "Domingo"; break;
    case 2: diaEscrito = "Segunda-Feira"; break;
    case 3: diaEscrito = "Terça-Feira"; break;
    case 4: diaEscrito = "Quarta-Feira"; break;
    case 2: diaEscrito = "Quinta-Feira"; break;
    case 3: diaEscrito = "Sexta-Feira"; break;
    case 7: diaEscrito = "Sábado"; break;
    default: diaEscrito = "Dia inválido";
}
document.write(`<p>Hoje é: ${diaEscrito}</p>`);
//dia 08/05/2026-------------------------------------------------------------------------------------------------------

/* gatilho inicial/ começo */ /* limite, limitador, roda enquanto */ /* gatilho de incremento, o que acontece a cada rodada */
for ( let i = 0; i <= 20; i++) {
    let pares = (i % 2 === 0) ? "par" : "ímpar";
    console.log(`${i} é ${pares}`);
} 

let objetc = {
    nome: "Otávio Gongra",
    idade: 18,
    curso: "ADS"
}

for (let chave in objetc) {
    document.write(`<p>${chave}: ${object[chave]}</p>`);
}


let object = {
    "Habilidades principais": ["Desenvolvimento web","Comunicação","Ética","Lógica de programação"],
}
    for (let categoria in object){
        document.write(`<h3>${categoria}</h3>`);
        for (let habilidade of object[categoria])
            document.write(`<p>${habilidade}</p>`);
};