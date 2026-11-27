export class Smartphone {
  constructor(modelo, so, sensores) {
    this.modelo = modelo;
    this.so = so;
    this.sensores = sensores;
  }

  temSensor(nome) {
    return this.sensores.includes(nome);
  }

  descricao() {
    return `${this.modelo} (${this.so}) — ${this.sensores.length} sensores`;
  }
}