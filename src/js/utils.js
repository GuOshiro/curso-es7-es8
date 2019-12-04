function renderizarLista(...itens){
    return document.getElementById(itens[0]).innerHTML = `<ul>
        ${itens[1].map(item => `<li>${item}</li>`)}
    </ul>`
}