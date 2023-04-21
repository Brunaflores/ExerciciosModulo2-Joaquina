
var salario = 280;

switch (true) {
    case (salario <= 280):
        novoSalario = salario * 1.2;
        totalReajuste = novoSalario - salario;
        console.log(`Salário antes do reajuste: ${salario}`);
        console.log(`Percentual de aumento aplicado: 20%`)
        console.log(`O valor do reajuste é de R$ ${totalReajuste}:`);
        console.log(`Salário após o reajuste: ${novoSalario}`);

        break;

    case (salario > 280 && salario <= 700):
        novoSalario = salario * 1.15;
        totalReajuste = novoSalario - salario;
        console.log(`Salário antes do reajuste: ${salario}`);
        console.log(`Percentual de aumento aplicado: 15%`)
        console.log(`O valor do reajuste é de R$ ${totalReajuste}:`);
        console.log(`Salário após o reajuste: ${novoSalario}`);

        break;
    case (salario > 700 && salario <= 1500):
        novoSalario = salario * 1.1;
        totalReajuste = novoSalario - salario;
        console.log(`Salário antes do reajuste: ${salario}`);
        console.log(`Percentual de aumento aplicado: 10%`)
        console.log(`O valor do reajuste é de R$ ${totalReajuste}:`);
        console.log(`Salário após o reajuste: ${novoSalario}`);


        break;
    case (salario > 1500):
        novoSalario = salario * 1.05;
        totalReajuste = novoSalario - salario;
        console.log(`Salário antes do reajuste: ${salario}`);
        console.log(`Percentual de aumento aplicado: 5%`)
        console.log(`O valor do reajuste é de R$ ${totalReajuste}:`);
        console.log(`Salário após o reajuste: ${novoSalario}`);

        break;
    default:
        console.log('Salário inválido');
}

