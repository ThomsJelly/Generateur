// Liste des prénoms masculins et féminins
const prenomsMasculins = ["Alex", "Benjamin", "David", "Eric", "Frank", "George"];
const prenomsFeminins = ["Alice", "Bella", "Claire", "Emma", "Fiona", "Grace"];

// Liste des noms de famille
const nomsDeFamille = ["Smith", "Johnson", "Brown", "Lee", "Garcia", "Davis"];

// Liste des origines
const origines = ["Français", "Anglais", "Américain", "Espagnol", "Italien", "Japonais"];

// Liste des futurs métiers
const metiers = ["Ingénieur", "Artiste", "Avocat", "Médecin", "Enseignant", "Scientifique"];

// Fonction de génération de nom aléatoire
function genererNomAleatoire() {
  const sexe = document.getElementById("sexe").value;
  const origine = document.getElementById("origine").value;
  const futurMetier = document.getElementById("futurMetier").value;

  let prenom;
  if (sexe === "masculin") {
    prenom = prenomsMasculins[Math.floor(Math.random() * prenomsMasculins.length)];
  } else if (sexe === "feminin") {
    prenom = prenomsFeminins[Math.floor(Math.random() * prenomsFeminins.length)];
  }

  const nomFamille = nomsDeFamille[Math.floor(Math.random() * nomsDeFamille.length)];
  const origineAleatoire = origines[Math.floor(Math.random() * origines.length)];
  const futurMetierAleatoire = metiers[Math.floor(Math.random() * metiers.length)];

  return {
    prenom,
    nomFamille,
    origine: origine !== "null" ? origine : origineAleatoire,
    futurMetier: futurMetier !== "null" ? futurMetier : futurMetierAleatoire,
  };
}

// Fonction pour afficher le nom généré dans la page
function afficherNomGenere() {
    const nomAleatoire = genererNomAleatoire();
    const nomsGeneresDiv = document.getElementById("noms-generes");
  
    // Filtrer les valeurs "null" et afficher seulement les valeurs définies
    let nomAffiche = `
      <div class="nom-aleatoire">
        <span class="label">Prénom:</span> ${nomAleatoire.prenom}<br>
        <span class="label">Nom de famille:</span> ${nomAleatoire.nomFamille}<br>
    `;
    if (nomAleatoire.origine !== "null") {
      nomAffiche += `<span class="label">Origine:</span> ${nomAleatoire.origine}<br>`;
    }
    if (nomAleatoire.futurMetier !== "null") {
      nomAffiche += `<span class="label">Futur métier:</span> ${nomAleatoire.futurMetier}<br>`;
    }
    nomAffiche += `</div>`;
  
    nomsGeneresDiv.innerHTML = nomAffiche;
  }
  
  // Ajoute un écouteur d'événement sur le bouton de génération
  document.getElementById("btnGenerer").addEventListener("click", afficherNomGenere);
  