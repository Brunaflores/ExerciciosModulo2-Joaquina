function getUser(id) {
    return fetch(`https://reqres.in/api/users?id=${id}`) 
    .then((data) => data.json()) 
    .catch((erro) => console.log('ocorreu um erro' + erro))
}

async function showUserName(id){
    try {
        const user = await getUser(id)
        console.log(`o nome de usuario é:${user.data.first_name}`)
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

showUserName(7);