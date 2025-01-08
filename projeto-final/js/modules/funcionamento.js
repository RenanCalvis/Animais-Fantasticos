export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
  }

  dadosFuncionamento() {
    this.diaSemana = funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = funcionamento.dataset.horario.split(",").map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaSemanaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 4;
  }

  estaAberto() {
    const semanaAberto = this.diaSemana.indexOf(this.diaSemanaAgora) !== -1;
    const horarioAberto =
      this.horarioAgora >= this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1];
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
