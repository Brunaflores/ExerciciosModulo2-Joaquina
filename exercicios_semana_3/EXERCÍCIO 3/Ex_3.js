var soma;
for(var i = 1; i <= 100; i++){
    if(i % 5 !== 0){
        soma += i;
        console.log(i)
    }else{
        console.log (`${i} Múltiplos de 5`)
    }
}   
console.log(soma);
