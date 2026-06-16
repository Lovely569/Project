const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const offsetX = canvas.offsetLeft;
const offsetY = canvas.offsetTop;

canvas.width = 500;
canvas.height = 500;


let isPainting = false;
let startX;
let startY;

canvas.addEventListener("mousedown", (e)=> {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
    console.log(startX, startY)
})

canvas.addEventListener("mouseup", ()=> {
    isPainting = false;
    ctx.stroke();
})

canvas.addEventListener("mousemove", (e)=> {
    if(!isPainting) {
        return;
    }
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX - offsetX, e.clientY - offsetY);
})