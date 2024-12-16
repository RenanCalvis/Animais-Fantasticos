//FOREACH   
//Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.
const imgs1 = document.querySelectorAll('img');

imgs1.forEach(function(item){
//   console.log(item);
});

//Parametros do FOREACH
//O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Esse função pode receber três parâmetros: valorAtual, index e array;

imgs1.forEach(function(item, index, array){
//   console.log(item); // o item atual no loop
//   console.log(index); // o número do index
//   console.log(array); // a Array completa
});

//FOREACH E ARRAY
//forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});

//ARROW FUNCTION
//Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.
imgs1.forEach((item) => {
  console.log(item);
});
console.clear();
//PARÂMETROS E PARÊNTESES
//const imgs = document.querySelectorAll('img');

// parâmetro único não precisa de parênteses
imgs1.forEach(item => {
    console.log(item);
  });
  
  // multiplos parâmetros precisam de parênteses
  imgs1.forEach((item, index) => {
    console.log(item, index);
  });
  
  // sem parâmetro precisa dos parênteses, mesmo vazio
  let i1 = 0;
  imgs1.forEach(() => {
    console.log(i1++);
  });
  let i2 = 0;

  //RETURN
  //É possível omitir as chaves {} para uma função que retorna uma linha.
  imgs1.forEach(()=> console.log(i2++))
  //É melhor utilizar os parênteses
  console.clear();

  //Exercicio
// Mostre no console cada parágrado do site
// Mostre o texto dos parágrafos no console
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach(paragrafo =>{
    console.log(paragrafo);
    console.log(paragrafo.innerText);
})

// Como corrigir os erros abaixo:
// const imgs1 = document.querySelectorAll('img');

// imgs.forEach(item, index => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach( => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);
//Resolução:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( ()=> {
  console.log(i++);
});

imgs.forEach(() => i++);
// Apenas acrecentar () dentro dos loopings forEach
