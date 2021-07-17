//interface pra tipar 
interface Usuario{
    nome:string;
    email:string;
    address?: string;
}

function getUser(): Usuario{
    return {
        nome: 'Chaienne',
        email: 'chaienne@chaienne.com'
    }
}

function setUser(usuario: Usuario){
    //....
}