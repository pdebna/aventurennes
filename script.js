/* ======================
   VARIABLES
====================== */

let current = null;
let solved = [];


/* ======================
   INITIALISATION
====================== */

window.onload = function () {

  solved = new Array(enigmes.length).fill(false);

  initMenu();

};


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

  document.getElementById("answer").value = "";
  document.getElementById("feedback").innerHTML = "";
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

  const input = normalize(
    document.getElementById("answer").value
  );

  const e = enigmes[current];

  const valid = e.answers
    .map(function (a) {
      return normalize(a);
    })
    .includes(input);

  if (valid) {

    solved[current] = true;

    showStops(e);

    initMenu();

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

  if (e.message && e.message !== "") {
    html += "<p class=\"success\">" + e.message + "</p>";
  }

  html += "<ul class=\"stops\">";

  e.stops.forEach(function (s) {
    html += "<li>" + s + "</li>";
  });

  html += "</ul>";

  document.getElementById("feedback").innerHTML = html;
}


/* ======================
   FIN DU JEU
====================== */

function checkFinish() {

  if (solved.every(function (v) { return v; })) {

    document.getElementById("final").style.display = "block";

    let phrase = "";

    enigmes.forEach(function (e) {
      phrase += e.letter;
    });

    document.getElementById("result").innerText = phrase;

  }

}
