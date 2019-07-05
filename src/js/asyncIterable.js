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
    for await (let val of AsyncIterable('hamburguer', 'pizza', 'danoninho')) {
        newText += `${val}, `;
    }

    return newText;
}

async function gerarFrase(text) {
    let listaAlimento = await iteracaoSobreAsyncIterable(text);
    let alimentosHtml = document.getElementById('alimentos');
    alimentosHtml.innerHTML = '<p>' + listaAlimento + '</p>';
}

gerarFrase('Os melhores alimentos são ')


function asyncIteratorAlimentos() {
    const listaAlimentos = [{ alimento: 'pizza', caloria: 2000 }, { alimento: 'Hamburguer', caloria: 1000 }, { alimento: 'danoninho', caloria: 5000 }];
    return {
        next: function () {
            if (listaAlimentos.length) {
                return Promise.resolve({
                    value: listaAlimentos.shift(),
                    done: false
                });
            } else {
                return Promise.resolve({
                    done: true
                });
            }
        }
    };
}

var iterator = asyncIteratorAlimentos();

(async function () {
    await iterator.next().then(console.log);
    await iterator.next().then(console.log);
    await iterator.next().then(console.log);
})();