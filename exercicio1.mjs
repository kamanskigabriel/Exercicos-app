const aparelhos = [
  { modelo: 'Galaxy A55', so: 'Android', preco: 2299, sensores: ['acelerômetro', 'giroscópio', 'NFC', 'impressão digital'] },
  { modelo: 'iPhone 15', so: 'iOS', preco: 5999, sensores: ['acelerômetro', 'LiDAR', 'barômetro', 'Face ID'] },
  { modelo: 'Moto G85', so: 'Android', preco: 1499, sensores: ['acelerômetro', 'proximidade', 'luz ambiente'] },
  { modelo: 'Redmi Note 13', so: 'Android', preco: 1399, sensores: ['infravermelho', 'acelerômetro', 'giroscópio'] },
];

const android = aparelhos.filter((a) => a.so === 'Android');
console.log('Android:', android);

const nomes = aparelhos.map((a) => a.modelo);
console.log('Modelos:', nomes);

const comInfravermelho = aparelhos.find((a) => a.sensores.includes('infravermelho'));
console.log('Com infravermelho:', comInfravermelho);

const baratos = aparelhos.filter((a) => a.preco < 2000);
console.log('Abaixo de R$ 2.000:', baratos);
