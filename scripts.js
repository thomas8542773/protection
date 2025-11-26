document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("avisForm");
  const liste = document.getElementById("listeAvis");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nom = document.getElementById("nom").value;
      const message = document.getElementById("message").value;

      const avis = document.createElement("div");
      avis.classList.add("avis");
      avis.innerHTML = `<strong>${nom}</strong><p>${message}</p>`;
      liste.appendChild(avis);

      form.reset();
    });
  }
});
 
