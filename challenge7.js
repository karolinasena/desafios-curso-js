/*
Crie um array com 5 items (tipos variados).
*/
var arr = [1, 'Karol', true, obj = { curso: 'JS Ninja', prof: 'Fernando' }, null];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(value) {
  arr.push(value);
  return arr;
}

console.log(addItem(3))

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
arr.push([false, 'Javascript', 10]);

console.log(arr);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
var size = arr.length;
console.log(`O segundo elemento do segundo array é ${arr[size - 1][1]}`);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${size} itens`);

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${arr[size - 1].length} itens`);

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log('Números pares entre 10 e 20:');
var even = 10;

while (even <= 20) {
  if (even % 2 == 0) {
    console.log(even);
  }
  even++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log('Números ímpares entre 10 e 20:');
var odd = 10;
while (odd <= 20) {
  if (odd % 2 != 0) {
    console.log(odd);
  }
  odd++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log('Números pares entre 100 e 120:');
for(var i = 100; i <= 120; i++) {
  if(i % 2 == 0)
    console.log(i);
}

console.log('Números ímpares entre 111 e 125:');
for(var i = 111; i <= 125; i++) {
  if(i % 2 != 0)
    console.log(i);
}