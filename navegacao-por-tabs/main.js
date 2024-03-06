const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');


if(tabMenu.length && tabContent.length){
    function activeSection(index){
        tabContent.forEach((section) =>{
        section.classList.remove('ativo');
    });
    tabContent[index].classList.toggle('ativo');
}

tabMenu.forEach((item,index)=>{
    item.addEventListener('click', () =>{
        activeSection(index);
    });
})
}

//Posso também manter toda lógica dentro do mesmo escopo
// tabMenu.forEach((item,index)=>{
//     item.addEventListener('click', () =>{
//         tabContent.forEach((section) =>{
//             section.classList.remove('ativo');
//         });
//         tabContent[index].classList.add('ativo');
//     });
// })