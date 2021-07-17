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
class Data{
    //public dia:number; //acessa total
    //private mes:number; //acessa somente dentro da classe
    //ano:number;

    constructor (public dia: number,public mes:number, public ano:number =1970 ){ //definir o valor undefull
        //this.dia = dia;
        //this.mes = mes;
        //this.ano = ano;
        
    }
}

const data = new Data(1,1,2021);
console.log(data.dia);

const data2 = new Data(1,1); // uso do undefull

//exemplo 3

class Carro {
    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ){ }

    //modificadores de acesso    
    private alterarVelocidade(delta: number){
        const novaVelocidade = this.velocidadeAtual + delta;

        //FAÇO AS VALIDAÇÕES DE ACELERAÇÃO E FRENAGEM
        //this.velocidadeMaxima = XXX
        if(novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
        } else{
            this.velocidadeAtual =  delta > 0 ? this.velocidadeMaxima : 0
        }
    }

    acelerar(){
        this.alterarVelocidade(5);
        
    }

    frear(){
        this.alterarVelocidade(-5);
        }
    }

const carro = new Carro ('Chevrolet', 'Prisma', 250);
carro.acelerar();


//Herança: possui filhos no caso a classe camaro é um filho da classe carro

class Camaro extends Carro{
   private turbo = false; //atributo novo e só pode ser modificada dentro da classe

    constructor(){
        super('Chevrolet', 'Camaro', 500) // chamado da classe pai
    }

    ligarTurbo(){
        this.turbo = true;
    }
}

const camaro = new Camaro();
camaro.acelerar()
camaro.frear();
camaro.ligarTurbo();