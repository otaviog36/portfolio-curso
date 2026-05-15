//Botão Modo claro/escuro - 30/04/26 ---------------------------------------------------------------------------------

const botao = document.getElementById("modoClaroEscuro");
console.log(botao);

let claro = true;
botao.addEventListener("click", function() {
    if (claro) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        botao.textContent = "Modo claro";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        botao.textContent = "Modo escuro";
    }
    claro = !claro;
});

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
let mesAtual = dataAtual.getMonth() + 1;
let anoAtual = dataAtual.getFullYear();
let diaAtual = dataAtual.getDate();
let hoje = diaAtual + mesAtual + anoAtual;

// Valores adicionais para demonstração de tipos e objetos.
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

console.log(typeof anoRestante);
console.log(typeof mesRestante);
console.log(typeof diaRestante);

document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBio;
document.getElementById("anoFormatura").innerText = `Formatura prevista para: ${diaFormatura}/${mesFormatura}/${anoFormatura}`;
document.getElementById("anoIngresso").innerText = `Ano de Ingresso: ${anoIngresso}`;
document.getElementById("curso").innerText = `Curso: ${curso.nome} - Semestre: ${curso.semestre}`;
document.getElementById("tempoRestanteParaFormatura").innerText = 
`Tempo restante para a formatura: ${anoRestante} ano(s), ${mesRestante} meses e ${diaRestante} dias`;
//condicionais if+switch - 06/05/26-----------------------------------------------------------------------------------
if (anoFormatura - anoAtual <= 0) {
    document.getElementById("tempoRestanteParaFormatura").innerText = `Tempo restante para a formatura: ${mesRestante} meses e ${diaRestante} dias`;
} else if (anoFormatura - anoAtual === 1) {
    document.getElementById("tempoRestanteParaFormatura").innerText = `Tempo restante para formatura: ${anoFormatura - anoAtual} ano`;
} else {
    document.getElementById("tempoRestanteParaFormatura").innerText = `Tempo restante para formatura: ${anoFormatura - anoAtual} anos`;
}

// Exibe mensagem de curso já concluído caso a data já tenha passado.
if (diaRestante <= 0 && mesRestante <= 0 && anoRestante <= 0) {
    document.getElementById("tempoRestanteParaFormatura").innerText = `Curso Concluído`;
}

// Exemplo de operador ternário para mostrar aprovação ou reprovação.
let nota = 8;
let aprovado = (nota >= 6) ? "Aprovado" : "Reprovado";

document.write(`<p> Nota: ${nota} - ${aprovado}</p>`);

// Calcula o dia da semana atual e converte para texto.
let diaSemana = dataAtual.getDay() + 1;
let diaEscrito;

switch(diaSemana) {
    case 1: diaEscrito = "Domingo"; break;
    case 2: diaEscrito = "Segunda-Feira"; break;
    case 3: diaEscrito = "Terça-Feira"; break;
    case 4: diaEscrito = "Quarta-Feira"; break;
    case 5: diaEscrito = "Quinta-Feira"; break;
    case 6: diaEscrito = "Sexta-Feira"; break;
    case 7: diaEscrito = "Sábado"; break;
    default: diaEscrito = "Dia inválido";
}
document.write(`<p>Hoje é: ${diaEscrito}</p>`);

// Loop que imprime se cada número entre 0 e 20 é par ou ímpar.
for (let i = 0; i <= 20; i++) {
    let pares = (i % 2 === 0) ? "par" : "ímpar";
    console.log(`${i} é ${pares}`);
}

// Objeto com dados pessoais e iteração das suas propriedades.
let objeto = {
    nome: `${NOME}`,
    idade: 18,
    curso: "ADS"
};

for (let chave in objeto) {
    document.write(`<p>${chave}: ${objeto[chave]}</p>`);
}

// Objeto com lista de habilidades e exibição de cada item.
let habilidades = {
    "Habilidades principais": ["Desenvolvimento web","Comunicação","Ética","Lógica de programação"]
};
for (let categoria in habilidades) {
    document.write(`<h3>${categoria}</h3>`);
    for (let habilidade of habilidades[categoria]) {
        document.write(`<p>${habilidade}</p>`);
    }
};

// Operações com array de frutas demonstrando push, unshift, splice, pop e shift.
let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi"];
console.log(frutas);
frutas.push("Manga");
console.log(frutas);
frutas.unshift("Morango");
console.log(frutas);
frutas.splice(2, 0, "Pera");
console.log(frutas);
frutas.pop();
console.log(frutas);
frutas.shift();
console.log(frutas);
console.log(frutas.indexOf("Laranja"));
console.log(frutas.includes("Uva"));
console.log(frutas.length);
console.log(frutas);

frutas.forEach(function(fruta) {
    console.log(fruta);
});

// Exemplo de array de projetos e acesso às suas propriedades.
let projetos = [
    {nome: "Parkin-N-Space",
     tecnologias: ["Python","Tkinter","SQLite","Tkinter","CustomTkinter","MatPlotlib"],
     conhecimentos: ["Desenvolvimento de software","Banco de dados","Interface gráfica","Visualização de dados"],
     descricao: "Sistema de estacionamento inteligente que utiliza reconhecimento de placas para gerenciar vagas e pagamentos."
    }
];
let h2 = document.createElement("p");
h2.innerText = projetos[0].nome;
document.body.appendChild(h2);
console.log(projetos[0].descricao);
console.log(projetos[0].tecnologias);
console.log(projetos[0].conhecimentos);
// aula 14/05/26 funções
function MyName(A) {
    return(`Olá, meu nome é ${A}`);
};
console.log(MyName(NOME));


const nascimento = 2008;
document.createElement("p").innerText = MyName(NOME);
function calcularIdade(anoNascimento) {
    let minhaIdade = anoAtual - anoNascimento;
    return minhaIdade;
};
console.log(`Minha idade é: ${calcularIdade(nascimento)} anos`);


function calculoRestante(){
    let anoRestante = anoFormatura - anoAtual;
    let mesRestante = mesFormatura - mesAtual;
    let diaRestante = diaFormatura - diaAtual;
    if (anoRestante < 0 || (anoRestante === 0 && mesRestante < 0) || (anoRestante === 0 && mesRestante === 0 && diaRestante < 0)) {
        document.getElementById("tempoRestanteParaFormatura").innerText = "Curso Concluído";
    } else {
        document.getElementById("tempoRestanteParaFormatura").innerText = `Tempo restante para a formatura: ${anoRestante} ano(s), ${mesRestante} meses e ${diaRestante} dias`;
    }
    
};
calculoRestante();

