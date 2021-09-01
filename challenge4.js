var isTruthy = function (valor) {
  return valor ? true : false;
};

var _isTruthy;

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
_isTruthy = isTruthy(false);
console.log(_isTruthy);

_isTruthy = isTruthy(0);
console.log(_isTruthy);

_isTruthy = isTruthy(undefined);
console.log(_isTruthy);

_isTruthy = isTruthy('');
console.log(_isTruthy);

_isTruthy = isTruthy(null);
console.log(_isTruthy);

_isTruthy = isTruthy(NaN);
console.log(_isTruthy);

_isTruthy = isTruthy(-0);
console.log(_isTruthy);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
_isTruthy = isTruthy(1);
console.log(_isTruthy);

_isTruthy = isTruthy('Hello world!');
console.log(_isTruthy);

_isTruthy = isTruthy(true);
console.log(_isTruthy);

_isTruthy = isTruthy('0');
console.log(_isTruthy);

_isTruthy = isTruthy('false');
console.log(_isTruthy);

_isTruthy = isTruthy([]);
console.log(_isTruthy);

_isTruthy = isTruthy({});
console.log(_isTruthy);

var carro = {
  marca: 'Fiat',
  modelo: 'Mobi',
  placa: "ABC123",
  ano: 2020,
  cor: 'Cinza',
  qtsPortas: 4,
  assentos: 5,
  qtdPessoas: 0
};

carro.mudarCor = function (novaCor) {
  return carro.cor = novaCor;
};

carro.obterCor = function () {
  return carro.cor;
};

carro.obterModelo = function () {
  return carro.modelo;
};

carro.obterMarca = function () {
  return carro.marca;
};

carro.obterMarcaModelo = function () {
  return `Esse carro é um ${carro.obterMarca()} ${carro.obterModelo()}.`
};

carro.addPessoas = function (numeroPessoas) {

  let totalPessoas = carro.qtdPessoas + numeroPessoas;
  if (carro.qtdPessoas === carro.assentos && totalPessoas >= carro.assentos) {
    return "O carro já está lotado!"
  }

  if (totalPessoas > carro.assentos) {
    let assentosRestantes = carro.assentos - carro.qtdPessoas;
    let singularOuPlural = assentosRestantes === 1 ? 'pessoa' : 'pessoas'
    return `Só cabem mais ${assentosRestantes} ${singularOuPlural} no carro!`
  }
  
  carro.qtdPessoas += numeroPessoas;

  return `Já temos ${carro.qtdPessoas} pessoas no carro.`
};  

/* Qual a cor atual do carro?
*/
console.log('Cor atual: ', carro.cor);

// Mude a cor do carro para vermelho.
let _mudaCor = carro.mudarCor('Vermelho');

// E agora, qual a cor do carro?
console.log("Nova cor: ", _mudaCor);

// Mude a cor do carro para verde musgo.
_mudaCor = carro.mudarCor('Verde musgo');

// E agora, qual a cor do carro?
console.log("Nova cor: ", _mudaCor);

// Qual a marca e modelo do carro?
let _obterMarcaModelo = carro.obterMarcaModelo();
console.log(_obterMarcaModelo);

// Adicione 2 pessoas no carro.
carro.addPessoas(2);

// Adicione mais 4 pessoas no carro.
carro.addPessoas(4);

// Faça o carro encher.
carro.addPessoas(carro.assentos);

// Tire 4 pessoas do carro.
carro.addPessoas(-4);

// Adicione 10 pessoas no carro.
carro.addPessoas(10);

// Quantas pessoas temos no carro?
console.log(carro.qtdPessoas);