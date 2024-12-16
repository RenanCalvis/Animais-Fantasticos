//CLASSLIST
//Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.
const menu = document.querySelector('.menu');

console.log(menu);

console.log(menu.className); // string
console.log(menu.classList); // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes
console.log(menu);
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe
console.log(menu);
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo');

//ATTRIBUTES
//Retorna uma array-like com os atributos do elemento.
const animais = document.querySelector('.animais');

console.log(animais.attributes); // retorna todos os atributos
console.log(animais.attributes[0]); // retorna o primeiro atributo
console.log(animais.attributes['class'].textContent)// Pode passar o atributo direto

//GETATTRIBUTE E SETATTRIBUTE
//Métodos que retornam ou definem de acordo com o atributo selecionado
const img = document.querySelector('img');

console.log(img.getAttribute('src')); // valor do src
console.log(img.getAttribute('alt'));
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
console.log(img.getAttribute('alt'));
console.log(img.hasAttribute('id')); // true / false
img.removeAttribute('alt'); // remove o alt
console.log(img.getAttribute('alt')); // null
img.hasAttributes(); // true / false se tem algum atributo
//É muito comum métodos de get e set;

//READ ONLY VS WRITABLE
console.log(animais.className); // string com o nome das classes
console.log(animais.className = 'azul'); // substitui completamente a string
console.log(animais.className += ' vermelho'); // adiciona vermelho à string

console.log(animais.attributes = 'class="ativo"'); // não funciona, read-only
//podemos modificar o valor de uma propriedade objeto.propriedade = ''
console.clear();

//Exercicio
// Adicione a classe ativo a todos os itens do menu
const menuItens = document.querySelectorAll('.menu a');
console.log(menuItens);
menuItens.forEach(itens =>{
  (itens.classList.add('ativo'));
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItens.forEach((itens, index) =>{
  if(index > 0) itens.classList.toggle('ativo'); //Remove de todos posteriores ao primeiro
})  
console.log(menuItens[0]);//Possui o ativo
console.log(menuItens[1]);//Não possui o Ativo

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img');
console.log(imagens);
imagens.forEach((imagem) =>{
  console.log(imagem.hasAttribute('alt'));
  console.log(imagem.alt);
});
// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com/');