function AsyncIterable(...args) {
    let index = 0
    let asyncIterable = {
        [Symbol.asyncIterator]() {
            return this;
        },
        next() {
            if (index < args.length) {
                return Promise.resolve({ value: args[index++], done: false })
            } else {
                return Promise.resolve({ done: true })
            }
        }
    };
    return asyncIterable;
}

async function iteracaoSobreAsyncIterable(text) {
    let newText = text;
    for await (let val of AsyncIterable("hamburguer", "pizza", "baz")) {
        newText += `${val}, `;
    }

    return newText;
}

async function gerarFrase(text) {
    let newText = await iteracaoSobreAsyncIterable(text);
    let myDivElement = document.getElementById('aDiv');
    myDivElement.innerHTML = '<p>' + newText + '</p>';
}

gerarFrase('Os melhores alimentos são ')

a = 'https://www.codementor.io/tiagolopesferreira/asynchronous-iterators-in-javascript-jl1yg8la1';
a = 'https://medium.com/information-and-technology/ecmascript-2018-asynchronous-iteration-ec0b6a3a294a';