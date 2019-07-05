
function buscarLivrosPorPromise() {
    return fetch('https://www.googleapis.com/books/v1/volumes?q=javascript')
        .then(data => data.json())
        .then(data => {
            document.getElementById('listaComPromise').innerHTML =
                data.items.map(
                    book => `<li>${book.volumeInfo.title}</li>`
                )
        })
        .catch(erro => console.log(erro))
        .finally(() => console.log('Busca de livros pela promisse '))
}


async function buscarLivrosPorAsyncAwait() {
    try {
        const resposta = await fetch('https://www.googleapis.com/books/v1/volumes?q=javascript');
        const dados = await resposta.json();
        return document.getElementById('listaComAsync').innerHTML =
            dados.items.map(book => `<li>${book.volumeInfo.title}</li>`);
    }
    catch (erro) {
        console.error(erro)
    }
}

const finallys = 'https://thecodebarbarian.com/using-promise-finally-in-node-js.html';


buscarLivros = buscarLivrosPorAsyncAwait()
    .then(() => console.log('Agora que resgato por async await, resgate por buscarLivrosPorPromise'))
    .catch((error) => console.error({ 'Erro inesperado': error }))
    .finally(() => buscarLivrosPorPromise())