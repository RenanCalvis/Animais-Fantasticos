// Posso também manter toda lógica dentro do mesmo escopo
// tabMenu.forEach((item,index)=>{
//     item.addEventListener('click', () =>{
//         tabContent.forEach((section) =>{
//             section.classList.remove('ativo');
//         });
//         tabContent[index].classList.add('ativo');
//     });
// })
export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  function activeSection(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });

    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add("ativo", direcao);
  }

  if (tabMenu.length && tabContent.length) {
    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeSection(index);
      });
    });
  }
}
