window.addEventListener("load", () => {

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resize(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*";
const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

// MATRIX (smoother + darker)
function draw(){
ctx.fillStyle = "rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "#ff0033";
ctx.font = fontSize + "px monospace";

for(let i=0;i<drops.length;i++){
const text = chars[Math.floor(Math.random()*chars.length)];
ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize > canvas.height && Math.random() > 0.975){
drops[i] = 0;
}
drops[i]++;
}
}

setInterval(draw, 33);

// TERMINAL (more realistic hacker effect)
const typing = document.getElementById("typing");

const lines = [
"> Initializing REVERSE X SYSTEM...",
"> Loading encrypted modules...",
"> Injecting UI protocol...",
"> Connecting secure server...",
"> ACCESS GRANTED ✔",
"> Welcome back, Operator."
];

let line = 0;
let char = 0;

function type(){
if(line < lines.length){
if(char < lines[line].length){
typing.innerHTML += lines[line].charAt(char);
char++;
setTimeout(type, 20);
}else{
typing.innerHTML += "<br>";
line++;
char = 0;
setTimeout(type, 400);
}
}
}

type();

});
