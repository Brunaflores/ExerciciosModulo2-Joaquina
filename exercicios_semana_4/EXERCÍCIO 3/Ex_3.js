
class CalculoBasico{
    constructor(numero1, numero2){
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    Somatória(){
        console.log("O valor deste calculo básico é: ", this.numero1 + this.numero2);
    }

    static exibirSoma(){
        console.log("O resultado deste calculo básico é a soma do numero 1 com o numero 2");
    }
}

const calculoBasico = new CalculoBasico(35, 2);
console.log(calculoBasico);
calculoBasico.Somatória();
CalculoBasico.exibirSoma();