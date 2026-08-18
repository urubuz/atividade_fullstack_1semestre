const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const W = canvas.width;
const H = canvas.height;

ctx.fillStyle = '#9CA3AF';
ctx.fillRect(0, H * 0.75, W, H * 0.25);

ctx.fillStyle = 'rgba(107, 51, 20, 1)';
ctx.fillRect(W * 0.33, H * 0.42, W * 0.33, H * 0.33);

ctx.fillStyle = 'rgba(78, 49, 16, 1)';
ctx.fillRect(W * 0.46, H * 0.58, W * 0.07, H * 0.17);

ctx.fillStyle = 'rgba(216, 81, 81, 1)';
ctx.beginPath();
ctx.moveTo(W * 0.33, H * 0.42);
ctx.lineTo(W * 0.66, H * 0.42);
ctx.lineTo(W * 0.5, H * 0.25);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'rgba(0, 217, 255, 1)';
ctx.fillRect(W * 0.36, H * 0.48, W * 0.1, H * 0.1);
ctx.fillRect(W * 0.53, H * 0.48, W * 0.1, H * 0.1);

ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.arc(W * 0.78, H * 0.2, W * 0.1, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'rgba(47, 126, 216, 1)';
ctx.fillRect(0, H * 0.875, W * 0.33, H * 0.125);
ctx.fillRect(0, H * 0.75, W * 0.1, H * 0.125);

ctx.beginPath();
ctx.arc(0, H * 0.75, W * 0.1, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(W * 0.33, H * 0.98, W * 0.1, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'rgba(107, 51, 20, 1)';
ctx.fillRect(W * 0.1, H * 0.58, W * 0.06, H * 0.17);

ctx.fillStyle = 'rgba(28, 75, 10, 1)';
ctx.beginPath();
ctx.arc(W * 0.13, H * 0.53, W * 0.08, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = 'rgba(107, 51, 20, 1)';
ctx.fillRect(W * 0.8, H * 0.75, W * 0.06, H * 0.17);

ctx.fillStyle = 'rgba(28, 75, 10, 1)';
ctx.beginPath();
ctx.arc(W * 0.83, H * 0.7, W * 0.08, 0, Math.PI * 2);
ctx.fill();
