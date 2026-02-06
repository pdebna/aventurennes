/* ======================
   VARIABLES
====================== */

let current = null;
let solved = [];


/* ======================
   INITIALISATION
====================== */

window.onload = function () {

  loadProgress();

  if (solved.length === 0) {
    solved = new Array(enigmes.length).fill(false);
  }

  initMenu();
  updateProgressBar();
  checkFinish();
};


/* ======================
   SAUVEGARDE
====================== */

function saveProgress() {

  const data = {
    solved: solved
  };

  localStorage.setItem(
    "temoin_game_save",
    JSON.stringify(data)
  );
}

function loadProgress() {

  const data = localStorage.getItem("temoin_game_save");

  if (data) {
    const parsed = JSON.parse(data);
    solved = parsed.solved || [];
  }
}

/* ======================
   Réinitialisation
====================== */
function resetGame() {
  localStorage.removeItem("temoin_game_save");
  location.reload();
}

/* ======================
   MENU
====================== */

function initMenu() {

  const menu = document.getElementById("menu");
  menu.innerHTML = "";

  enigmes.forEach((e, index) => {

    const btn = document.createElement("button");

    btn.innerText = "Énigme " + (index + 1);

    btn.onclick = function () {
      loadEnigme(index);
    };

    btn.className = solved[index]
      ? "solved"
      : "unsolved";

    menu.appendChild(btn);

  });

}


/* ======================
   BARRE DE PROGRESSION
====================== */

function updateProgressBar() {

  const count = solved.filter(v => v).length;
  const total = enigmes.length;

  document.getElementById("progress-bar").innerText =
    count + " énigmes résolues sur " + total + " !";
}


/* ======================
   JEU
====================== */

function loadEnigme(index) {

  current = index;

  const e = enigmes[index];

  document.getElementById("game").style.display = "block";

  document.getElementById("progress").innerText =
    "Énigme " + (index + 1);

  document.getElementById("question").innerText =
    e.question;

  const input = document.getElementById("answer");
  const feedback = document.getElementById("feedback");

  feedback.innerHTML = "";

  // Si déjà résolue → on affiche directement
  if (solved[index]) {

    input.style.display = "none";

    showStops(e);

  } else {

    input.style.display = "block";
    input.value = "";
  }

}


/* ======================
   NORMALISATION
====================== */

function normalize(str) {

  return str
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

}


/* ======================
   VALIDATION
====================== */

function submitAnswer() {

  if (current === null) return;

  const inputField = document.getElementById("answer");

  const input = normalize(inputField.value);

  const e = enigmes[current];

  const valid = e.answers
    .map(a => normalize(a))
    .includes(input);

  if (valid) {

    solved[current] = true;

    saveProgress();

    inputField.style.display = "none";

    showStops(e);

    initMenu();
    updateProgressBar();
    checkFinish();

  } else {

    document.getElementById("feedback").innerText =
      "Pas encore… regarde bien 👀";

  }

}


/* ======================
   AFFICHAGE RESULTAT
====================== */

function showStops(e) {

  let html = "";

  // Message
  if (e.message) {
    html += "<p class='success'>" + e.message + "</p>";
  }

  // Image
  if (e.image) {
    html += "<img src='" + e.image + "' class='result-img'>";
  }

  // Liste arrêts
  html += "<ul class='stops'>";

  e.stops.forEach(s => {
    html += "<li>" + s + "</li>";
  });

  html += "</ul>";

  document.getElementById("feedback").innerHTML = html;
}


/* ======================
   FIN DU JEU
====================== */

function checkFinish() {

  if (solved.length === 0) return;

  if (solved.every(v => v)) {

    document.getElementById("final").style.display = "block";

    let phrase = "";

    enigmes.forEach(e => {
      phrase += e.letter;
    });

    document.getElementById("result").innerText =
      phrase;

    alert("🎉 Bravo ! Vous avez terminé toutes les énigmes !");
  }

}
