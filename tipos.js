"use strict";
//Boolean (podendo usar let/var pra declarar variaveis)
//usa const quando não muda o valor da variavel, caso contrario usa let
var contaPaga = false;
//Number
var idade = 23;
var avaliação = 4.5;
//String
var nome = 'Chaienne Silva';
//Array
var idades = [23, 25, 45, 32, 45];
var idades2 = [23, 345, 456, 46];
//Tuple
var jogadores;
jogadores: ['Chaienne', 3, true];
//Enum : consegue mapaear o que é cada coisa e chama somente a função
var StatusAprovado;
(function (StatusAprovado) {
    StatusAprovado["Aprovado"] = "001";
    StatusAprovado["Pendente"] = "002";
    StatusAprovado["Rejeitado"] = "003";
})(StatusAprovado || (StatusAprovado = {}));
var statusDaAprovação = StatusAprovado.Aprovado;
//Any: pra qualquer coisa (usa quando não sabe o tipo)
var retornoDaAPI = [123, 'Chaienne', false];
var retornoDaAP2 = {
// ........
};
//Void: usado pra dizer quando uma função não retorno nada
function printarNaTela(mgs) {
    console.log(mgs);
}
//Null e Undefined : dizer que a variavel vai ser null ou sem valor
var u = undefined;
var n = null;
//Object: não é um tipo primitivo
function criar(objecto) {
    // .....
}
criar({
    propriedade: 1,
});
//criar('Chaienne') // Da erro
//Never: tipos de coisas que nunca ocorrem (nunca termina)
function loopInifinito() {
    while (true) { }
}
//utilizado o never para erro
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
//Union Types:pode ter + de um tipo usando dois tipos
var nota = 5;
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota('10'); //tipo string
exibirNota(10); //tipo number
//type Funcionarios = Array<Funcionario>;
var funcionarios = [{
        nome: 'Chaienne',
        sobrenome: 'Silva',
        dataNascimento: new Date()
    }, {
        nome: 'Raissa',
        sobrenome: 'Silva',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionario: ', funcionario.nome);
    }
}
// Valores nulos ou opcionais: para permitir que sera null um campo valido (opcional)
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Chaienne',
    telefone1: '12345678',
};
//Type Assertion: define explicitamente qual o tipo da variavel
var minhaIdade = 27;
minhaIdade.toString();
//(<number>minhaIdade).toString();outra maneira de declarar
var input = document.getElementById("numero1"); //fica claro o tipo do meu retorno (a que tipo estou me referindo)
//const input =<HTMLInputElement> document.getElementById("numero1"); //outra maneira
console.log(input.value);
