const express = require("express");
const app = express();

// Función para generar valores aleatorios
function getRandomActivity() {
  const activities = ["Reading", "Cooking", "Running", "Painting", "Coding"];
  return activities[Math.floor(Math.random() * activities.length)];
}

function getRandomType() {
  const types = ["education", "recreational", "social", "diy", "charity"];
  return types[Math.floor(Math.random() * types.length)];
}

function getRandomParticipants() {
  return Math.floor(Math.random() * 10) + 1; // Entre 1 y 10 participantes
}

function getRandomPrice() {
  return Math.random() * 10; // Precio aleatorio entre 0 y 10
}

function getRandomLink() {
  return "https://example.com"; // Enlace de ejemplo
}

function getRandomKey() {
  return "randomKey"; // Clave aleatoria de ejemplo
}

function getRandomAccessibility() {
  return Math.random(); // Valor de accesibilidad aleatorio entre 0 y 1
}

// Ruta para el endpoint /random
app.get("/random", (req, res) => {
  const randomActivity = getRandomActivity();
  const randomType = getRandomType();
  const randomParticipants = getRandomParticipants();
  const randomPrice = getRandomPrice();
  const randomLink = getRandomLink();
  const randomKey = getRandomKey();
  const randomAccessibility = getRandomAccessibility();

  const randomJSON = {
    activity: randomActivity,
    type: randomType,
    participants: randomParticipants,
    price: randomPrice,
    link: randomLink,
    key: randomKey,
    accessibility: randomAccessibility,
  };

  res.json(randomJSON);
});

// Puerto en el que el servidor escuchará las peticiones
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
