let discButton = document.getElementById("useDsicl");
let disclosure = document.getElementById("disclosureWindow");

document.addEventListener("DOMContentLoaded", () => {
  discButton.addEventListener("click", (e) => {
    if (disclosure.style.display === "block") {
      // Si la divulgation est actuellement ouverte, la fermer
      disclosure.style.display = "none";
      discButton.setAttribute("aria-expanded", "false");
    } else {
      // Sinon, l'ouvrir
      disclosure.style.display = "block";
      discButton.setAttribute("aria-expanded", "true");
    }
  });
});
