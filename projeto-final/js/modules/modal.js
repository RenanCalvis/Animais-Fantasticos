export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);
    this.containerAtivo = "ativo";

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.fecharForaMoral = this.fecharForaMoral.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle(this.containerAtivo);
    // console.log(event);
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  fecharForaMoral(event) {
    if (event.target === this.containerModal) this.toggleModal(event);
  }

  addModalEvents() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.fecharForaMoral);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
