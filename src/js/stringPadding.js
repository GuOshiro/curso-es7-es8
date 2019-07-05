let padStart = document.getElementById('padStart').textContent;
padStart = padStart.padStart(23, 'Insere ');
document.getElementById('padStart').innerText = padStart;

let itens = ['item', 'item', 'item'];
let lista = [...itens.map((item, indice) => item.padStart(item.length + 3, `${indice}º `))]
document.getElementById('listaDeCompra').innerHTML = lista.map(nomes => `<span>${nomes.replace(/,/g, ' ')} <br><span>`)

let padEnd = document.getElementById('padEnd').textContent;
padEnd = padEnd.padEnd(23, ' no Final');
document.getElementById('padEnd').innerText = padEnd;



let nomes = ['Gabriel', 'Guilherme', 'Gustavo'];
let familia = [...nomes.map(nome => nome.padEnd(nome.length + 6, ' Souza'))]
document.getElementById('sobrenome').innerHTML = familia.map(nomes => `<span>${nomes.replace(/,/g, ' ')} <br><span>`)

