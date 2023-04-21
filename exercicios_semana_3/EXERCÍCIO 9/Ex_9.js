const pertenceRegiao = (...regioes) => {
    let regiao = "Região Sul";
    regioes.forEach(regioes => {
        regiao += regioes;

    })
    return `${regiao}`;
}
console.log(pertenceRegiao(" RS-", "SC-", "PR"));