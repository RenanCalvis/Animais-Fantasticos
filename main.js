// ID
const animais = document.getElementById('animais');
console.log(animais);
//console.log(animais.innerText);

//getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.
const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);
console.log(gridSection[0]);

//querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

//querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList
const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);
console.log(animaisImg[0]);

//HTMLCOLLECTION VS NODELIST
//A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.
const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

//titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens
console.log(gridSectionNode); // 3 itens

//ARRAY-LIKE
//HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.
gridSectionNode.forEach((item,index) =>{
    console.log(item);
    console.log(index);
});
//É possível transformar array-like em uma Array real, utilizando o método Array.from()
const gridSectionHTMLArr = Array.from(gridSectionHTML);
gridSectionHTMLArr.forEach((item) =>{
    console.log(item);
})
console.clear();

//Exercicios
// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens);
imagens.forEach((img)=>{
    console.log(img.alt);
})

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);
linksInternos.forEach((link)=>{
    console.log(link.href);
})

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2Animais = document.querySelector('.animais-descricao h2');
console.log(primeiroH2Animais);
//Ou
const h2Animais = document.querySelector('.animais-descricao');
const primeiroH2 = h2Animais.querySelector('h2');
console.log(primeiroH2);

// Selecione o último p do site
const body = document.querySelector('body');
console.log(body);
const ultimoP = body.querySelectorAll('p:last-child');
console.log(ultimoP[ultimoP.length -1].innerText);
// Ou
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1].innerText);
console.log(paragrafos[--paragrafos.length])
