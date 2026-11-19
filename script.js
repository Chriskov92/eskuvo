// Az esküvő dátuma: 2027. május 22. 16:00 (helyi idő szerint).
// Ha a szertartás máskor kezdődik, ezt az időpontot később átírhatjuk.
const weddingDate = new Date(2027, 4, 22, 16, 0, 0);

function updateCountdown() {
  const now = new Date();
  const distance = weddingDate.getTime() - now.getTime();
  const message = document.getElementById("countdown-message");
  if (distance <= 0) {
    ["days", "hours", "minutes", "seconds"].forEach(id => {
      document.getElementById(id).textContent = "0";
    });
    message.textContent = "Elérkezett a nagy nap! Ünnepeljünk!";
    return;
  }
  const units = {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60)
  };
  Object.entries(units).forEach(([id, value]) => {
    document.getElementById(id).textContent = String(value).padStart(2, "0");
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);

// A személyre szabáskor ide kerülnek a Google Űrlap és a térképek hivatkozásai.
const RSVP_URL = "";
const CEREMONY_MAP_URL = "";
const PARTY_MAP_URL = "";

const rsvpLink = document.getElementById("rsvp-link");
if (RSVP_URL) {
  rsvpLink.href = RSVP_URL;
} else {
  rsvpLink.addEventListener("click", event => {
    event.preventDefault();
    alert("A Google Űrlap hivatkozását még be kell állítani.");
  });
}
document.querySelectorAll("[data-map]").forEach(link => {
  const url = link.dataset.map === "ceremony" ? CEREMONY_MAP_URL : PARTY_MAP_URL;
  if (url) link.href = url;
  else link.addEventListener("click", event => {
    event.preventDefault();
    alert("A helyszín térképhivatkozását még be kell állítani.");
  });
});
