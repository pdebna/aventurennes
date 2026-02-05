let current = 0;
let solved = [];

const nextBtn = document.getElementById("nextBtn");

function loadEnigme() {
  const e = enigmes[current];

  document.getElementById("progress").innerText =
    `Énigme ${current + 1} / ${enigmes.length}`;

  document.getElementById("question").innerText = e.question;
  document.getElementById("answer").value = "";
  document.getElementById("feedback").innerText = "";

  nextBtn.style.display = "none";
}

function normalize(str) {
  return str
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function submitAnswer() {
  const input = normalize(
    document.getElementById("answer").value
  );

  const e = enigmes[current];

  const valid = e.answers
    .map(a => normalize(a))
    .includes(input);

  if (valid) {
    solved.push(e);
    showStops(e);
    nextBtn.style.display = "block";
  } else {
    document.getElementById("feedback").innerText =
      "Pas encore… regarde bien 👀";
  }
}

function showStops(e) {
  let html =
    `<h3>Lettre ${e.letter}</h3>
     <p>Trace les arrêts suivants :</p>
     <ul>`;

  e.stops.forEach(s => {
    html += `<li>${s}</li>`;
  });

  html += "</ul>";

  document.getElementById("feedback").innerHTML = html;
}

function next() {
  current++;

  if (current < enigmes.length) {
    loadEnigme();
  } else {
    showFinal();
  }
}

function showFinal() {
  document.getElementById("game").style.display = "none";
  document.getElementById("final").style.display = "block";

  const phrase = solved.map(e => e.letter).join("");

  document.getElementById("result").innerText =
    phrase;
}

loadEnigme();
