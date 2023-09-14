let modal = document.getElementById("modalWindow");
let openButton = document.getElementById("openMod");

document.addEventListener("DOMContentLoaded", () => {
  var focusable = modal.querySelectorAll(
    'button, [href], [tabindex]:not([tabindex="-1"])'
  );
  var firstFocusable = focusable[0];
  var lastFocusable = focusable[focusable.length - 1];

  openButton.addEventListener("click", (event) => {
    event.preventDefault();
    openModal();
  });

  function openModal() {
    modal.style.display = "flex";
    // Donner le focus au premier élément focusable dans la modal
    firstFocusable.focus();
    // Désactiver la navigation au clavier en dehors de la modal
    document.addEventListener("keydown", trapFocus);
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeModal();
      }
    });

  }

  function trapFocus(event) {
    if (event.key === "Tab") {
      if (event.shiftKey) {
        // Si la touche Majuscule est enfoncée, revenir au dernier élément focusable
        if (document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable.focus();
        }
      } else {
        // Sinon, avancer vers le premier élément focusable
        if (document.activeElement === lastFocusable) {
          event.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  }

  function closeModal() {
    modal.style.display = "none";
    openButton.focus();
    // Réactiver la navigation au clavier en dehors de la modal
    document.removeEventListener("keydown", trapFocus);
  }

  // Gérer la fermeture de la modal lorsque le bouton X est cliqué
  let closeButton = modal.querySelector("button");
  closeButton.addEventListener("click", closeModal);
});
