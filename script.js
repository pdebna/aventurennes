let current = null;
let solved = new Array(enigmes.length).fill(false);

initMenu();

/* ======================
   MENU
====================== */

function initMenu() {

  const menu = document.getElementById("menu");
  menu.innerHTML = "";

  enigmes.forEach((e, index) => {

    const btn = document.createElement("button");

    btn.innerText = "Énigme " + (index + 1);

    btn.onclick = () => loadEnigme(index);

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
    `Énigme ${index + 1} / ${enigmes.length}`;

  document.getElementById("question").innerText =
    e.question;

  document.getElementById("answer").value = "";
  document.getElementById("feedback").innerText = "";
}


/* ======================
   VALIDATION
====================== */

function normalize(str) {
  return str
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function submitAnswer() {

  if (current === null) return;

  const input = normalize(
    document.getElementById("answer").value
  );

  const e = enigmes[current];

  const valid = e.answers
    .map(a => normalize(a))
    .includes(input);

  if (valid) {

    solved[current] = true;

    showStops(e);

    initMenu();

    checkFinish();

  } else {

    document.getElementById("feedback").innerText =
      "Ah non, ce n'est pas ça… tu peux tenter ta chance à nouveau !";

  }
}


/* ======================
   AFFICHAGE
====================== */

function showStops(e) {

  let html =
    `<h3>Partons voyager...</h3>

  e.stops.forEach(s => {
    html += `<li>${s}</li>`;
  });

  html += "</ul>";

  document.getElementById("feedback").innerHTML = html;
}


/* ======================
   FIN
====================== */

function checkFinish() {

  if (solved.every(v => v)) {

    document.getElementById("final").style.display = "block";

    const phrase = enigmes
      .map(e => e.letter)
      .join("");

    document.getElementById("result").innerText =
      phrase;
  }

}
