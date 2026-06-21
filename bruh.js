

const undoBtn = document.querySelector(".undo");
const canvas = document.querySelector("canvas");
const imgParent = document.querySelector(".img-parent");

// some hotfixes... ( ≖_≖)
document.body.style.margin = 0;


// get canvas 2D context and set him correct size
var ctx = canvas.getContext('2d');
ctx.canvas.width = 500;
ctx.canvas.height = 500;

// last known position
let X;
let Y;
let isPainting = false;
let history = [];
let strokeCount = -1;
console.log(strokeCount);

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e)=>{
  isPainting = true;
  strokeCount++;
  setPosition(e);
});
document.addEventListener('mouseup', ()=>{
  isPainting = false;

  if(strokeCount >= 0) {
    history.splice(strokeCount);
  }

  //condition makes sure that random mouseup events outside the canvas dont result in duplicate images
  if (strokeCount >= history.length) {
    
    history.push(document.querySelector("canvas").toDataURL());

  }
})


undoBtn.addEventListener("click", ()=> {

  if(strokeCount == 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    strokeCount--;
    return;
  }
  
  if(strokeCount > 0) {
    strokeCount--;
    let previousImg = new Image();
    previousImg.src = history[strokeCount];
    previousImg.onload = ()=> {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(previousImg, 0, 0);
    }
  }
})

// document.addEventListener('mouseenter', setPosition);

// new position from mouse event
function setPosition(e) {
  X = e.clientX;
  Y = e.clientY - ctx.canvas.offsetTop;
}



function draw(e) {
  // mouse left button must be pressed
  if (!isPainting) return;

  ctx.beginPath(); // begin

  ctx.lineWidth = 5;
  ctx.lineCap = 'round';


  ctx.moveTo(X, Y); // from
  setPosition(e);
  ctx.lineTo(X, Y); // to

  ctx.stroke(); // draw it!
}
