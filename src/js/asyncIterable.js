//iterable com async await
function tabelaAlimentos() {
    const tabelas = {
        alimento: {
            1: { nome: 'Maça' },
            2: { nome: 'Pizza' },
            3: { nome: 'Feijoada' },
            4: { nome: 'Hamburguer' },
        }
    }
    return {
        getSync: (nome, id) => tabelas[nome][id],
        getAsync: (nome, id) => delay(50).then(() => tabelas[nome][id]),
    }
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const tabela = tabelaAlimentos()

//iterable normal
const asyncIteratorAlimentos = {
    [Symbol.iterator]: () => {
        let i = 0;
        return {
            next: () => {
                i++;
                const alimento = tabela.getSync('alimento', i)
                if (alimento) {
                    return { value: alimento, done: false };
                }
                return { done: true }
            }
        };
    }
}

for (const alimento of asyncIteratorAlimentos) {
    console.log(alimento)
}


//iterable async
const alimentosAsync = {
    [Symbol.iterator]: function () {
        let i = 0;
        return {
            next: async function () {
                i++;
                const alimento = await tabela.getAsync('alimento', i)
                if (!alimento) {
                    return { done: true }
                }
                return {
                    value: alimento,
                    done: false
                }
            }
        }
    }
};






(async function () {
    for await (const alimento of asyncIteratorAlimentos) {
        console.log(await alimento)
    }
})()
