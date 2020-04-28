const canvas = document.getElementById("cnvs");

function makeLime() {
  canvas.style.backgroundColor = 'lime';
}

function makeYellow() {
  canvas.style.backgroundColor = 'white';
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = 'yellow';
  ctx.fillRect(10, 10, 40, 40);
  ctx.fillRect(60, 10, 40, 40);

  ctx.fillStyle = '#181818';
  ctx.font = "24px Roboto";
  ctx.fillText("Hello", 10, 80);
}
