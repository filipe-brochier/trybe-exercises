// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem checadas (Respostas da pessoa estudante) e o terceiro é uma função que checa se a resposta está correta e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
    // Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
    
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const confereRespostas = (arrayGabarito, arrayRespostasEstudante) => {
    let pontuacao = 0, numAcertos = 0;
    for (let pos = 0; pos < arrayGabarito.length; pos += 1) {
        switch (arrayRespostasEstudante[pos]) {
            case arrayGabarito[pos]:
                pontuacao += 1; 
                numAcertos += 1;
                break;
            case 'N.A':
                break;
            default:
                pontuacao -= 0.5;
                break;
        }
    } return `Pontuação: ${pontuacao}
Acertos: ${numAcertos}`;
}

const avaliacao = (arrayGabarito, arrayRespostasEstudante, funcao) => funcao(arrayGabarito, arrayRespostasEstudante);

console.log((avaliacao(RIGHT_ANSWERS, STUDENT_ANSWERS, confereRespostas)));