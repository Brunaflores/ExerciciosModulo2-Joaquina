
const multiplicador = 3;
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayMultiplicado = [];
for (const item of array) {
    arrayMultiplicado.push(item * multiplicador);
}

console.log(arrayMultiplicado);
