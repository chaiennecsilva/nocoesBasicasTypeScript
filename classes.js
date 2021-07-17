"use strict";
/* exemplo 01
class Data{
    public dia:number; //acessa total
    private mes:number; //acessa somente dentro da classe
    ano:number;

    constructor (dia: number,mes:number, ano:number =1970 ){ //definir o valor undefull
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        
    }
}

const data = new Data(1,1,2021);
console.log(data.dia);

const data2 = new Data(1,1); // uso do undefull
*/
//exemplo 2
var Data = /** @class */ (function () {
    //public dia:number; //acessa total
    //private mes:number; //acessa somente dentro da classe
    //ano:number;
    function Data(dia, mes, ano) {
        //this.dia = dia;
        //this.mes = mes;
        //this.ano = ano;
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var data = new Data(1, 1, 2021);
console.log(data.dia);
var data2 = new Data(1, 1); // uso do undefull
