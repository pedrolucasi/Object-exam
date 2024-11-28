import { Exame } from "./objeto.js";

const gabarito = ['a', 'b', 'a', 'c', 'd'];
const pesos = [2, 2, 2, 2, 2]; 

const respostasAluno = {
    pedro: ['a', 'b', 'b', 'b', 'b'],
    lucas: ['a', 'c', 'b', 'c', 'd'],
    joao: ['b', 'a', 'c', 'd', 'd']
};

const exame = new Exame(gabarito, pesos);

exame.addRespostas(respostasAluno);
exame.exibirResultado('pedro');
exame.exibirResultado('lucas');
exame.exibirResultado('joao');

const maiorNotaAluno = exame.alunoMaiorNota();
console.log(`Aluno com maior nota: ${maiorNotaAluno.aluno} Nota: ${maiorNotaAluno.nota.toFixed(1)}`);
const menorNotaAluno = exame.alunoMenorNota();
console.log(`Aluno com menor nota: ${menorNotaAluno.aluno} Nota: ${menorNotaAluno.nota.toFixed(1)}`);

const alunosMenorQue4 = exame.alunoNotaMenorQue4();
console.log("Alunos com nota menor que 4.0:");
alunosMenorQue4.forEach(aluno => {
    console.log(`${aluno.aluno} - Nota: ${aluno.nota.toFixed(1)}`);
});

const alunosMaiorQue4 = exame.alunoNotaMaiorQue4();
console.log("Alunos com nota maior que 4.0:");
alunosMaiorQue4.forEach(aluno => {
    console.log(`${aluno.aluno} - Nota: ${aluno.nota.toFixed(1)}`);
});

const mediaGeral = exame.calcularMedia();
console.log(`Média geral: ${mediaGeral.toFixed(1)}`);