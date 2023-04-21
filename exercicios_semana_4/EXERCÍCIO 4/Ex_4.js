// 
const minhaPromise = new Promise((resolve, reject) => {
    const nome = 'Laura';

    if (nome === 'Bruna') {
        resolve('o usuario Bruna esta logada.')
    } else {
        reject('o usuario Bruna nao esta logada.')
    }
})
// .then() e .catch() sao metodos de uma promise
minhaPromise.then((dado) => {
    console.log(dado)
})
// .catch() e um metodo de uma promise que recebe um erro
.catch((erro) => {
    console.log(erro)
}
)