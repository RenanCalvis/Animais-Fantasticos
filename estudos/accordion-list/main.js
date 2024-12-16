//Posso também manter toda lógica dentro do mesmo escopo
// tabMenu.forEach((item,index)=>{
//     item.addEventListener('click', () =>{
//         tabContent.forEach((section) =>{
//             section.classList.remove('ativo');
//         });
//         tabContent[index].classList.add('ativo');
//     });
// })
function initTabNav(){
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
};
initTabNav();

function initAccordion(){
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';
    if(accordionList.length){
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);
        
        function activeAccordion(){
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }
        
        accordionList.forEach((item) =>{
            item.addEventListener('click', activeAccordion);
        });
    }
}
initAccordion();