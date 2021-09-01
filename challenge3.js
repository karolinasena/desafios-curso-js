var obj_vazio = {};
var pessoa = {
  nome: 'Karol',
  sobrenome: 'Sena',
  sexo: 'F',
  idade: 21,
  altura: 1.60,
  peso: 58.0,
  andando: false,
  caminhouQntsMetros: 0,
}

pessoa.fazerAniversario = function () {
  pessoa.idade = pessoa.idade + 1;
  return pessoa.idade;
}

pessoa.andar = function (metros) {
  let total = pessoa.caminhouQntsMetros += metros;
  pessoa.andando = true;
  return total;
}

pessoa.teste = function(m) {
  if (m == 1) {
    return 'Caminhei' + m + ' metro.'
  } else {
    return 'Caminhei ' + m + ' metros.'
  }
}

pessoa.parar = function () {
  pessoa.andando = false;
}

pessoa.nomeCompleto = function () {
  if (pessoa.sexo == 'F')
    return 'Olá, eu sou a ' + pessoa.nome + ' ' + pessoa.sobrenome + '.';
  else
    return 'Olá, eu sou o ' + pessoa.nome + ' ' + pessoa.sobrenome + '.';
}

pessoa.mostrarIdade = function () {
  if (pessoa.idade == 1)
    return 'Eu tenho ' + pessoa.idade + ' ano.';
  else
    return 'Eu tenho ' + pessoa.idade + ' anos.';
}

pessoa.mostrarPeso = function () {
  return 'Eu peso ' + pessoa.peso + 'Kg.';
}

pessoa.mostrarAltura = function () {
  return "Minha altura é " + pessoa.altura + 'm.'
}

// Chamada de métdos

let _fazerAniversario = pessoa.fazerAniversario();
let _andar = pessoa.andar(120);
let _nomeCompleto = pessoa.nomeCompleto();
let _mostrarIdade = pessoa.mostrarIdade();
let _peso = pessoa.mostrarPeso();
let _altura = pessoa.mostrarAltura();

// Imprime no console

// console.log(_fazerAniversario); // 22
console.log(_andar); // 120m
console.log(pessoa.andando); // true

pessoa.parar();

console.log(pessoa.andando); // false

console.log(_nomeCompleto); // Olá meu nome é Karol Sena
console.log(_mostrarIdade); // Olá, eu tenho 22 anos
console.log(_altura); // Minha altura é 1.6m.
console.log(_peso); // Eu peso 58Kg.

// Fazer aniversário 3x
for (let i = 1; i <= 3; i++) {
  console.log("Nova idade ", pessoa.fazerAniversario());
}

// caminhar 3x
for (let i = 1; i <= 3; i++) {
  console.log(120 * i);
}

if (pessoa.andando == true) {
  pessoa.parar();
  console.log(pessoa.andando);
} else {
  console.log("não está andando");
}

pessoa.apresentacao = function () {
  let mensagem = _nomeCompleto + ' ' + _mostrarIdade + ' ' + _altura + ' ' + _peso + ' ' + pessoa.teste(_andar);
  return mensagem;
}

let _apresentacao = pessoa.apresentacao();

console.log(_apresentacao);






