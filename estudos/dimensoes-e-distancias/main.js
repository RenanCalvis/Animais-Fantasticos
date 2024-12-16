//HEIGHT E WIDTH
//Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only
const section = document.querySelector('.animais');

console.log(section.clientHeight); // height + padding
console.log(section.offsetHeight); // height + padding + border
console.log(section.scrollHeight); // height total, mesmo dentro de scroll
//Mesma coisa para o Width, clientWidth

//OFFSETTOP E OFFSETLEFT
// Distância entre o topo do elemento e o topo da página
console.log(section.offsetTop);

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
console.log(section.offsetLeft);

//GETBOUNDINGCLIENTRECT()
//Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.
const rect = section.getBoundingClientRect();
console.log(rect);
console.log(rect.height); // height do elemento
console.log(rect.width); // width do elemento
console.log(rect.top); // distância entre o topo do elemento e o scroll

//WINDOW
console.log(
window.innerWidth, // width do janela
window.outerWidth, // soma dev tools também
window.innerHeight, // height do janela
window.outerHeight, // soma a barra de endereço

window.scrollY, // distância total do scroll vertical
window.scrollX, // distância total do scroll horizontal
);
if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}

//MATCHMEDIA();
//Utilize um media-querie como no CSS para verificar a largura do browser
const small = window.matchMedia('(max-width: 600px)');
console.log(small);
if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}
console.clear();

//Exercicios
// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImage = document.querySelector('img');
console.log(firstImage.offsetTop);

// Retorne a soma da largura de todas as imagens
const images = document.querySelectorAll('img');
console.log(images[6].offsetWidth);
let totalLarge = 0.0;
images.forEach((img) =>{
    totalLarge += img.offsetWidth;
})
console.log(totalLarge);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link)=>{
    let linkWidth = link.offsetWidth;
    console.log(linkWidth);
    let linkHeight = link.offsetHeight;
    console.log(linkHeight);
    (linkWidth >= 48 && linkHeight >= 48)? console.log(link,"Possui acessibilidade") : console.log(link,"Não possui boa acessibilidade");
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const smallBrowser = window.matchMedia('(max-width:720px)');
const menu = document.querySelector('.menu');
console.log(menu);
if(smallBrowser.matches){
    menu.classList.add('menu-mobile');
}
console.log(menu);