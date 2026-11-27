import { Smartphone } from './Smartphone.mjs';

const moto = new Smartphone('Moto G85', 'Android', ['acelerômetro','proximidade',  'luz ambiente']);
const redmi = new Smartphone('Redmi Note 13', 'Android', ['infravermelho','acelerômetro',  'giroscópio']);

console.log(moto.descricao());
console.log('Moto tem proximidade?', moto.temSensor('proximidade'));

console.log(redmi.descricao());
console.log('Redmi tem infravermelho?', redmi.temSensor('infravermelho'));