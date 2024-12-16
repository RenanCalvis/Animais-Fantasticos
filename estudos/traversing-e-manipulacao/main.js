// //OUTERHTML, INNERHTML E INNERTEXT
// //Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'.
// const menu = document.querySelector('.menu');

// console.log(menu.outerHTML); // todo o html do elemento
// console.log(menu.innerHTML); // html interno
// console.log(menu.innerText); // texto, sem tags

// // menu.innerText = '<p>Texto</p>'; // a tag vai como texto
// // menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada
// // console.log(menu.innerText);
// // console.log(menu.innerHTML); 

// //TRASVERSING
// //Como navegar pelo DOM, utilizando suas propriedades e métodos.
// const lista = document.querySelector('.animais-lista');

// console.log(lista.parentElement); // pai
// console.log(lista.parentElement.parentElement); // pai do pai
// console.log(lista.previousElementSibling); // elemento acima
// console.log(lista.nextElementSibling); // elemento abaixo

// console.log(lista.children); // HTMLCollection com os filhos
// console.log(lista.children[0]); // primeiro filho
// console.log(lista.children[--lista.children.length]); // último filho

// console.log(lista.querySelectorAll('li')); // todas as LI's
// console.log(lista.querySelector('li:last-child')); // último filho

// //ELEMENT VS NODE
// //Element's represetam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.
// console.log(lista.previousElementSibling); // elemento acima
// console.log(lista.previousSibling); // node acima

// console.log(lista.firstChild); // primeiro node child
// console.log(lista.childNodes); // todos os node child
// //Geralmente estamos atrás de um elemento e não de qualquer node em si.

// //MANIPULANDO ELEMENTOS
// //É possível mover elementos no dom com métodos de Node.
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');

// // contato.appendChild(lista); // move lista para o final de contato
// // contato.insertBefore(lista, titulo); // insere a lista antes de titulo
// // contato.removeChild(titulo); // remove titulo de contato
// // contato.replaceChild(lista, titulo); // substitui titulo por lista

// //NOVOS ELEMENTOS
// //Podemos criar novos elementos com o método createElement()
// const animais = document.querySelector('.animais');

// const novoH1 = document.createElement('h1');
// novoH1.innerText = 'Novo Título';
// novoH1.classList.add('titulo');

// animais.appendChild(novoH1);

// //CLONAR ELEMENTOS
// //Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()
// const titulo1 = document.querySelector('h1');
// const titulo2 = document.querySelector('h1');
// const novoTitulo = titulo1;
// // titulo, titulo2 e novoTitulo são iguais, se modificar 1 todos são afetados

// const cloneTitulo = titulo1.cloneNode(true);
// //const contato = document.querySelector('.contato');
// contato.appendChild(cloneTitulo);
// //true sinaliza para incluir os filhos, false seria so a tag que o envolve

//Exercicios
// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");
const menuClone = menu.cloneNode(true);

copy.appendChild(menuClone);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
console.log(faq.children[1].children[0]);
const primeiroDt = faq.querySelector('dt');
console.log(primeiroDt);

// Selecione o DD referente ao primeiro DT
const primeiroDD = primeiroDt.nextElementSibling;
console.log(primeiroDD);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;