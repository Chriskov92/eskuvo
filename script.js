// A visszaszámlálás a meghívón szereplő esküvői nap kezdetéig (14:30) számol.
const weddingDate = new Date(2027, 4, 22, 14, 30, 0);

function updateCountdown() {
  const remaining = weddingDate.getTime() - Date.now();
  const ids = ["days", "hours", "minutes", "seconds"];
  if (remaining <= 0) {
    ids.forEach(id => document.getElementById(id).textContent = "0");
    return;
  }
  const values = [
    Math.floor(remaining / 86400000),
    Math.floor((remaining % 86400000) / 3600000),
    Math.floor((remaining % 3600000) / 60000),
    Math.floor((remaining % 60000) / 1000)
  ];
  ids.forEach((id, index) => {
    document.getElementById(id).textContent = String(values[index]).padStart(2, "0");
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);
