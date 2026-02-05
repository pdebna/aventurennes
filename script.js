// Charger les énigmes depuis le fichier JSON
let enigmes = [];

fetch('data/enigmes.json')
  .then(response => response.json())
  .then(data => {
    enigmes = data.enigmes;
    afficherListeEnigmes();
  });

// Afficher la liste des énigmes
function afficherListeEnigmes() {
  const container = document.getElementById('liste-enigmes');
  enigmes.forEach(enigme => {
    const bouton = document.createElement('button');
    bouton.textContent = `Énigme ${enigme.id}`;
    bouton.onclick = () => afficherEnigme(enigme.id);
    container.appendChild(bouton);
  });
}

// Afficher une énigme spécifique
function afficherEnigme(id) {
  const enigme = enigmes.find(e => e.id === id);
  document.getElementById('enigme-question').textContent = enigme.question;
  document.getElementById('enigme-container').style.display = 'block';
  document.getElementById('valider').onclick = () => verifierReponse(enigme);
}

// Vérifier la réponse
function verifierReponse(enigme) {
  const reponseUser = document.getElementById('reponse-utilisateur').value;
  const resultatDiv = document.getElementById('resultat');

  if (reponseUser.toLowerCase() === enigme.reponse.toLowerCase()) {
    resultatDiv.innerHTML = `
      <p>${enigme.commentaire}</p>
      <h3>Arrêts STAR à relier :</h3>
      <ul>
        ${enigme.arrets.map(arret => `<li>${arret.nom} (Ligne ${arret.ligne})</li>`).join('')}
      </ul>
    `;
  } else {
    resultatDiv.innerHTML = "<p>Dommage, ce n'est pas la bonne réponse. Réessaye !</p>";
  }
}
