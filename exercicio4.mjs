function lerSensor(nome) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(Math.random()), 3500);
  });
}

async function lerSensores() {
  const sensores = ['acelerômetro', 'giroscópio', 'proximidade'];

  for (const nome of sensores) {
    const valor = await lerSensor(nome);
    console.log(`${nome}: ${valor}`);
  }
}

lerSensores();
