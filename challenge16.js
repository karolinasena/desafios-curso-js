/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/

(function () {
  'use strict'
  /*
  Declare uma variável chamada `name` que receba seu primeiro nome.
  Mostre no console todas as letras do seu nome separadas, com a frase:
  - "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
  Ex: no caso do nome ser "Fernando", deve mostrar as frases:
  - "F é a 1ª letra do meu nome."
  - "e é a 2ª letra do meu nome."
  E assim por diante, até a última.
  */
  console.log('As letras do seu nome:');
  var name = 'Karol';

  for (var i = 0; i < name.length; i++) {
    console.log(name.charAt(i) + " é a " + (i + 1) + "ª letra do meu nome.");
  }

  /*
  - Declare uma variável chamada `fullName`, que receba seu nome completo,
  escrito no formato de slug (caixa baixa e palavras separadas por um traço).
  Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
  - Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
  por um espaço.
  - Detalhe: o código que você escrever abaixo deve funcionar para qualquer
  nome, então fique à vontade para usar as artimanhas que já viu até agora no
  curso para fazer isso funcionar corretamente :)
  - Mostre no console o nome no formato slug, e o resultado final. Use um
  console.log para cada formato.
  */
  console.log('\nNome convertido à partir de um slug:');
  var fullName = 'ana-karolina-dos-santos-sena';

  var fullNameSplit = fullName.split('-');

  var fullNameJoin = fullNameSplit.map(function (item, index) {

    var fullNameUpper = fullNameSplit[index].charAt(0).toUpperCase();
    var fullNameConcat = fullNameUpper.concat(fullNameSplit[index].slice(1));


    return fullNameConcat;

  }).join(' ');

  console.log(fullNameJoin);

  /*
  - Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
  cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
  ser um "e". No final, concatene com a frase: " são meus amigos.".
  O resultado final deve ficar mais ou menos assim:
  - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
  - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
  5 nomes foi somente uma sugestão ;)
  */
  console.log('\nMeus amigos:');
  var friends = ['Iuri', 'Gabi', 'Fátima', 'Moacir', 'Marcílio', 'Patrícia', 'Marcilene'];

  var text = friends.reduce(function (acumulado, atual, index) {

    var separador = friends.length - 1 === index ? ' e ' : ', ';
    return acumulado + separador + atual;
  }).concat(' são meus amigos ');

  console.log(text);

  /*
  Usando o replace(), faça a string "Roberto" virar "Roberta".
  Mostre o resultado no console.
  */
  console.log('\nEra "Roberto", agora é:');
  var roberto = 'Roberto'
  var roberta = roberto.replace('to', 'ta')
  console.log(roberta)

  /*
  Mostre no console a parte "nando" da string "Fernando". Use o método que
  faz a busca do final para o início da string.
  */
  console.log('\nParte de uma string:');
  var name = 'Fernando'
  var substring = name.substring(8, 3);
  console.log(substring)

  /*
  Declare uma variável chamada `myName`, que receba o seu primeiro nome,
  escrito de forma natural.
  Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
  e minúsculas.
  - Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
  de qualquer tamanho, escrito de qualquer forma.
  Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
  */
  console.log('\nNome com letras intercaladas entre caixa alta e baixa:');
  var myName = 'Karol'
  var myNewName = []

  for(var i = 0; i < 5; i++) {
    myNewName.push( i % 2 == 0 ? myName[i].toUpperCase() : myName[i].toLowerCase());
  }

  console.log(myNewName.join(''))

})();