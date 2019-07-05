const frutas = ['banana', 'maça', 'melao']

let frutaSelecionadaExiste;
frutas.forEach(fruta => {
    if (fruta === 'maça') {
        frutaSelecionadaExiste = true;
    }
})

document.getElementById('resultIndexOf').innerText = `${frutaSelecionadaExiste}`;
document.getElementById('resultIncludes').innerText = `${frutas.includes('maça')}`;

