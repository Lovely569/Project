const canvas = document.querySelector("canvas");
const undoBtn = document.querySelector(".undo-btn");
const redoBtn = document.querySelector(".redo-btn");
const thicknessInput = document.querySelector(".brush-thickness");
const colorInput = document.querySelector(".brush-color");


//get 2d context
var ctx = canvas.getContext('2d');
//make canvas 500px by 500px
ctx.canvas.width = 500;
ctx.canvas.height = 500;

let X;
let Y;
let isPainting = false;

//this is where we push a png image of our canvas every time we draw something new on it
//think of it like an array of snapshots
let history = [];

//this is to show where we are in history,
//since our history is empty in the beginning, we start at -1
//(the code will change soon, after we add the history to local storage,
// meaning we wont start with empty history)
let currentStrokeIndex = -1;

//this is to show the last index in history 
//until we press "undo", last and current indexes should stay the same (line 34)
let lastStrokeIndex;

let brushThickness = thicknessInput.value;
let brushColor = colorInput.value;


thicknessInput.addEventListener("change", ()=> {
    brushThickness = thicknessInput.value;
})

colorInput.addEventListener("change", ()=> {
    brushColor = colorInput.value;
})



canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e)=>{
  isPainting = true;
  currentStrokeIndex++;
  lastStrokeIndex = currentStrokeIndex;
  setPosition(e);
});
document.addEventListener('mouseup', ()=>{
    if(isPainting) {
        isPainting = false;

        if(currentStrokeIndex >= 0) {
            history.splice(currentStrokeIndex);
        }

        //condition makes sure that random mouseup events outside the canvas dont result in duplicate images
        if (currentStrokeIndex >= history.length) {
            
            history.push(document.querySelector("canvas").toDataURL());

        }
    }
 
})


undoBtn.addEventListener("click", ()=> {
  //this condition makes sure that current index never goes beyong -1
  if(currentStrokeIndex >= 0) {
    currentStrokeIndex--;
    //if we are at -1, that means that we wanna go all the way to the beginning of history,
    //when the canvas was still empty, so we clear the canvas and not draw anything
    if(currentStrokeIndex == -1) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    //if not, we draw
    else drawFromHistory();
  }

  console.log(history.length);
})

redoBtn.addEventListener("click", ()=> {
    if (currentStrokeIndex < lastStrokeIndex) {
        currentStrokeIndex++;
        drawFromHistory();
    }
});

function drawFromHistory(){
    //we need to get the png image from the history, based on our current index
    let image = new Image();
    image.src = history[currentStrokeIndex];
    //when said image loads, we first clear the canvas, then draw that image
    image.onload = ()=> {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0)
    }
}


// new position from mouse event
function setPosition(e) {
  const rect = canvas.getBoundingClientRect();  
  X = e.clientX - rect.left;
  Y = e.clientY - rect.top;
}



function draw(e) {
  // mouse left button must be pressed
  if (!isPainting) return;

  ctx.beginPath(); // begin

  ctx.lineWidth = brushThickness;
  ctx.strokeStyle = brushColor;
  ctx.lineCap = 'round';


  ctx.moveTo(X, Y); // from
  setPosition(e);
  ctx.lineTo(X, Y); // to

  ctx.stroke(); // draw it!
}