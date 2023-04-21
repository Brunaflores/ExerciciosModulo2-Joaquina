function primeiraFuncao(){
    return new Promise((resolve) =>{
        setTimeout(() => {
            console.log('informações recebidas, com sucesso!')
            resolve()
        }, 5000)
        })
    }

    async function segundaFuncao(){
        console.log('aguardando informações...')

        await primeiraFuncao()

        console.log('processo finalizado.')

        alert('Obrigada!')
    }

    segundaFuncao()