
const virtues = [
  "Amor",
  "Respeto",
  "Complicidad",
  "Paciencia",
  "Apoyo",
  "Confianza",
  "Alegría",
  "Lealtad",
  "Cariño",
  "Admiración"
];

let index = 0;
const virtueElement = document.getElementById("virtue");

setInterval(() => {
  virtueElement.textContent = virtues[index];
  index = (index + 1) % virtues.length;
}, 3000);

// Contador de tiempo
const startDate = new Date("2022-09-12");
const counter = document.getElementById("counter");

function updateCounter() {
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  counter.textContent = `${years} años, ${months} meses y ${days} días`;
}

updateCounter();
