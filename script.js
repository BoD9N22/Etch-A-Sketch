const DEFAULT = 16;
const MAX = 100;
const container = document.getElementById("container");
const btnBlock = document.getElementById("btn-block");
const btnReset = document.getElementById("btn-reset");
const currentSize = document.getElementById("current-size");
const btnRandomRGB = document.getElementById("btn-randomRGB");

function createGrid(n) {
  container.innerHTML = "";
  currentSize.textContent = n + "×" + n;
  const containerWidth = container.clientWidth;
  const sqSize = Math.floor(containerWidth / n);
  const total = n * n;
  for (let i = 0; i < total; i++) {
    const sq = document.createElement("div");
    sq.className = "block";
    sq.dataset.darkCount = "0";
    sq.style.width = sqSize + "px";
    sq.style.height = sqSize + "px";
    container.appendChild(sq);
  }
}

createGrid(DEFAULT);

container.addEventListener("mouseover", event => {
  if (event.target.classList.contains("block")) {
    const color = randomRGB();
    event.target.style.background = `rgb(${color.r}, ${color.g}, ${color.b})`;
  }
});

function randomRGB() {
  return {
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256),
  };
}

function clearGrid() {
  const squares = container.children;
  for (const sq of squares) {
    sq.style.background = "#fff";
  }
}

function addNewGrid() {
  const answer = prompt(
    "Введите количество квадратов на сторону (число от 1 до " + MAX + ")"
  );
  const n = parseInt(answer, 10);
  if (n > MAX || n <= 0) {
    alert("Введите число в заданном диапазоне");
    createGrid(DEFAULT);
    return;
  }
  createGrid(n);
}
btnBlock.addEventListener("click", addNewGrid);
btnReset.addEventListener("click", clearGrid);
