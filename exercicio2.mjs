class Smartphone {
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
const galaxy = new Smartphone('Galaxy A55', 'Android', ['acelerômetro', 'giroscópio', 'NFC', 'impressão digital']);
const iphone = new Smartphone('iPhone 15', 'iOS', ['acelerômetro', 'LiDAR', 'bafometro', 'Face ID']);

console.log(galaxy.descricao());
console.log('Galaxy tem NFC?', galaxy.temSensor('NFC'));

console.log(iphone.descricao());
console.log('iPhone tem NFC?', iphone.temSensor('NFC'));
