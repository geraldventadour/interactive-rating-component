const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = document.getElementById("value");

  const cards = document.querySelectorAll(".card");

  value.textContent = form.rating.value;

  cards.forEach((card) => card.classList.toggle("display:none"));
});
