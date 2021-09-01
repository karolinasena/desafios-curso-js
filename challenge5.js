/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var arr = ['Karol', 21, true, obj = { nome: 'Karol', idade: 21 }, null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function retornaArray(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(retornaArray(arr));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function retornaValor(arr, indice) {
  return arr[indice];
}

console.log(retornaValor(arr, 2));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var newArray = [10, 'Ana', false, null, obj = {}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(retornaArray(newArray))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(nomeLivro) {
  let obj = {
    'Hello world, dev!': {
      qtdPaginas: 100,
      autor: 'Ana Karolina',
      editora: 'Mundo dev'
    },
    'Fundamentos de Design Gráfico': {
      qtdPaginas: 200,
      autor: 'Karol Sena',
      editora: 'Universo Design'
    },
    'Fundamentos de UX Design': {
      qtdPaginas: 220,
      autor: 'Ana Karolina',
      editora: 'Universo Design'
    },
  }

  if(!nomeLivro) {
    return obj;
  }
  return obj[nomeLivro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log(`O livro Hello world, dev! tem ${book('Hello world, dev!').qtdPaginas} páginas.`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log(`O autor do livro Fundamentos de Design Gráfico é ${book('Fundamentos de Design Gráfico').autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro Fundamentos de UX Design foi publicado pela editora ${book('Fundamentos de UX Design').editora}.`)

