
function familia(membros) {
    return {
        addMembro: function (membro) {
            membros.push(membro)
        },
        listarMembros: function () {
            membros.forEach(membro => {
                console.log(membro)
            })
        }
    }
}  
const familia1 = familia(['Fernando', 'Bruna', 'Maria Luiza'])
familia1.listarMembros()
console.log('adicinar novo membro na familia')
familia1.addMembro('Augusto')
familia1.listarMembros()


