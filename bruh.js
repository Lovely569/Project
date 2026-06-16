
const canvas = document.querySelector("canvas");

// some hotfixes... ( ≖_≖)
document.body.style.margin = 0;
canvas.style.position = 'fixed';

// get canvas 2D context and set him correct size
var ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
// last known position
let X;
let Y;


document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

// new position from mouse event
function setPosition(e) {
  X = e.clientX;
  Y = e.clientY;
}



function draw(e) {
  // mouse left button must be pressed
  if (e.buttons !== 1) return;

  ctx.beginPath(); // begin

  ctx.lineWidth = 5;
  ctx.lineCap = 'round';


  ctx.moveTo(X, Y); // from
  setPosition(e);
  ctx.lineTo(X, Y); // to

  ctx.stroke(); // draw it!
}