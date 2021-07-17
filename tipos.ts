//Boolean (podendo usar let/var pra declarar variaveis)
//usa const quando não muda o valor da variavel, caso contrario usa let
const contaPaga: boolean = false;

//Number
const idade: number = 23;
const avaliação: number = 4.5;

//String
const nome: string = 'Chaienne Silva';

//Array
const idades: number[] = [23,25,45, 32,45];
const idades2: Array<number>  = [23,345,456,46];

//Tuple
let jogadores: [string, number, boolean];
jogadores: ['Chaienne', 3, true];


//Enum : consegue mapaear o que é cada coisa e chama somente a função
enum StatusAprovado{
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}

const statusDaAprovação: StatusAprovado = StatusAprovado.Aprovado;

//Any: pra qualquer coisa (usa quando não sabe o tipo)
const retornoDaAPI: any[]= [123, 'Chaienne', false];
const retornoDaAP2: any = {
    // ........
};

//Void: usado pra dizer quando uma função não retorno nada
function printarNaTela(mgs: string): void{
    console.log(mgs);
}

//Null e Undefined : dizer que a variavel vai ser null ou sem valor
const u: undefined = undefined;
const n: null = null;

//Object: não é um tipo primitivo
function criar(objecto: object){
    // .....
}
criar({
    propriedade: 1,
})
//criar('Chaienne') // Da erro


//Never: tipos de coisas que nunca ocorrem (nunca termina)
function loopInifinito(){
    while(true){}
}

//utilizado o never para erro
function erro(mensagem: string): never{
    throw new Error(mensagem);
}

function falha(){
    return erro ('Algo falhou');
}

//Union Types:pode ter + de um tipo usando dois tipos
const nota: string | number = 5;

function exibirNota(nota: number | string) {
    console.log(`A nota é ${nota}`);
}
exibirNota('10'); //tipo string
exibirNota(10); //tipo number

//Alias: criar atalhos pros tipos

type Funcionario ={
    nome: string;
    sobrenome: string;
    dataNascimento: Date;

}
//type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario [] = [{
    nome: 'Chaienne',
    sobrenome:'Silva',
    dataNascimento: new Date()
}, {
    nome: 'Raissa',
    sobrenome:'Silva',
    dataNascimento: new Date()
}];


function tratarFuncionarios(funcionarios:Funcionario[]){
    for (let funcionario of funcionarios){
        console.log('Nome do funcionario: ', funcionario.nome )
    }
}

// Valores nulos ou opcionais: para permitir que sera null um campo valido (opcional)

let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string,
    telefone1: string,
    telefone2?: string; //uso do ? mostra que é opcional

}
const contato: Contato = {
    nome:'Chaienne',
    telefone1: '12345678',
}

//Type Assertion: define explicitamente qual o tipo da variavel
const minhaIdade: any = 27;
(minhaIdade as boolean).toString();
//(<number>minhaIdade).toString();outra maneira de declarar

const input = document.getElementById("numero1") as HTMLInputElement; //fica claro o tipo do meu retorno (a que tipo estou me referindo)
//const input =<HTMLInputElement> document.getElementById("numero1"); //outra maneira
console.log(input.value);


