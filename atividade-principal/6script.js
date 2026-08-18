const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;
let trail = [];

canvas.addEventListener("mousemove", (event) => {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  mouseX = (event.clientX - rect.left) * scaleX;
  mouseY = (event.clientY - rect.top) * scaleY;

  trail.push({ x: mouseX, y: mouseY });
  if (trail.length > 20) {
    trail.shift();
  }
});

canvas.addEventListener("mouseleave", () => {
  trail = [];
});

function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < trail.length; i++) {
    const alpha = (i / trail.length) * 0.4;
    const radius = 5 + (i / trail.length) * 15;
    ctx.beginPath();
    ctx.arc(trail[i].x, trail[i].y, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(100, 134, 247, ${alpha})`;
    ctx.fill();
  }

  ctx.beginPath();
  ctx.arc(mouseX, mouseY, 20, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(mouseX, mouseY, 15, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(100, 134, 247, 0.6)";
  ctx.fill();

  requestAnimationFrame(desenhar);
}

desenhar();
