let padStart = document.getElementById('padStart').textContent;
padStart = padStart.padStart(23, 'Insere ');
document.getElementById('padStart').innerText = padStart;

let padEnd = document.getElementById('padEnd').textContent;
padEnd = padEnd.padEnd(23, ' no Final');
document.getElementById('padEnd').innerText = padEnd;

