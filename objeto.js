export class Exame {
    constructor(gabarito, pesos) {
        this.gabarito = gabarito;  
        this.pesos = pesos;        
        this.respostas = {};       
    }

   
    addRespostas(respostasAluno) {
        this.respostas = respostasAluno;
    }

    
    calcularNota(nomeAluno) {
        let nota = 0;
        const respostasAluno = this.respostas[nomeAluno];

      
        for (let i = 0; i < this.gabarito.length; i++) {
            if (respostasAluno[i] === this.gabarito[i]) {
                nota += this.pesos[i];
            }
        }
        return nota;
    }

    
    exibirResultado(nomeAluno) {
        const nota = this.calcularNota(nomeAluno);
        console.log(`${nomeAluno}: ${nota.toFixed(1)}`);
    }

    alunoMaiorNota() {
        let maiorNota = -1;
        let alunoMaior = '';
        for (let aluno in this.respostas) {
            const nota = this.calcularNota(aluno);
            if (nota > maiorNota) {
                maiorNota = nota;
                alunoMaior = aluno;
            }
        }
        return { aluno: alunoMaior, nota: maiorNota };
    }

    alunoMenorNota() {
        let menorNota = Infinity;
        let alunoMenor = '';
        for (let aluno in this.respostas) {
            const nota = this.calcularNota(aluno);
            if (nota < menorNota) {
                menorNota = nota;
                alunoMenor = aluno;
            }
        }
        return { aluno: alunoMenor, nota: menorNota };
    }

    alunoNotaMenorQue4() {
        let alunosComNotaMenorQue4 = [];
        for (let aluno in this.respostas) {
            const nota = this.calcularNota(aluno);
            if (nota < 4.0) {
                alunosComNotaMenorQue4.push({ aluno, nota });
            }
        }
        return alunosComNotaMenorQue4;
    }

    alunoNotaMaiorQue4() {
        let alunosComNotaMaiorQue4 = [];
        for (let aluno in this.respostas) {
            const nota = this.calcularNota(aluno);
            if (nota > 4.0) {
                alunosComNotaMaiorQue4.push({ aluno, nota });
            }
        }
        return alunosComNotaMaiorQue4;
    }

    calcularMedia() {
        let soma = 0;
        let total = 0;

        for (let aluno in this.respostas) {
            const nota = this.calcularNota(aluno);
            soma += nota;
            total++;
        }

        const media = soma / total;
        return media;
    }
}


