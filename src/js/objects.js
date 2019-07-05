//entries
const cursos = { javascript: 1, react: 2, angular: 3, vue: 4 }

const objectKeys = Object.keys(cursos)
const objectEntries = Object.entries(cursos)
const objectEntriesMap = new Map(objectEntries)


document.getElementById('objectKeys').innerHTML = objectKeys.map(curso => `<li>${curso}</li>`);
document.getElementById('objectEntries').innerHTML = objectEntries.map(curso => `<li>${curso}</li>`);

console.log(objectEntriesMap.has('javascript'))
console.log(objectEntriesMap.get('javascript'))

//lista de ranking de um jogo
const jogadores = { GiovanaPontuacao: 50, GiovanaPorcentagem: 50, AlinePontuacao: 100, AlinePorcentagem: 100 }
//precisaria saber tanto o nome do jogador quanto a pontuação
const listaJogadores = Object.entries(jogadores);
let novaLista = [];
listaJogadores.map(jogador => {
    let nomeJogador = jogador[0]
        .replace('Pontuacao', '')
        .replace('Porcentagem', '');
    novaLista.push({
        nome: nomeJogador,
        pontuacao: jogador[1]
    })
})

console.log(novaLista);


//values
const objectValues = Object.values(cursos);

document.getElementById('objectKeysValue').innerHTML = objectKeys.map(index => `<li>${cursos[index]}</li>`);
document.getElementById('objectValues').innerHTML = objectValues.map(curso => `<li>${curso}</li>`);

//jogadores
let jogadoresValues = Object.values(jogadores);
console.log(jogadoresValues)



//rest

let { javascript, react, ...frameworks } = cursos;
document.getElementById('objectRest').innerHTML = `<li>${javascript}</li> <li>${react}</li>  <li>${JSON.stringify(frameworks)}</li>`

let pontuacao = { nome: 'Giovana', idade: 20, quantidadeDeJogos: 10, pontosPartida: [0, 55, 9, 80, - 5, -99, 100] }
let { pontosPartida, ...informacoesDoJogador } = pontuacao;
console.log(Math.min(...pontuacao.pontosPartida), informacoesDoJogador)


//spread
let spread = { javascript, react, ...frameworks };
spread = Object.entries(spread)
document.getElementById('objectSpread').innerHTML = spread.map(item => `<li>${JSON.stringify(item)}</li>`)

const listaPontosPartida = { ...pontosPartida }
console.log(listaPontosPartida)