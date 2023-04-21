
class Animal {
    constructor(nome, especie, cor) {
        this.nome = nome,
            this.especie = especie,
            this.cor = cor
    }

    getEspecieNome(){
    console.log(this.especie + ' ' + this.nome);

}}




let animal1 = new Animal('Pok', 'Cachorro', 'Marrom');
let animal2 = new Animal('Miau', 'Gato', 'Branco');

console.log(animal1);
console.log(animal2);

animal1.getEspecieNome();
animal2.getEspecieNome();







