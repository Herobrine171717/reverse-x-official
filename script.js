// MATRIX BACKGROUND (better version)
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*";
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0,0,0,0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ff0000";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 30);

// TERMINAL TYPING LOOP (like real hacker UI)
const lines = [
"> Initializing REVERSE X system...",
"> Loading modules...",
"> Access granted...",
"> Welcome back, Operator.",
"> Cyber system online..."
];

let i = 0;
let j = 0;
const terminal = document.getElementById("typing");

function typeLine() {
    if (i < lines.length) {
        if (j < lines[i].length) {
            terminal.innerHTML += lines[i][j];
            j++;
            setTimeout(typeLine, 30);
        } else {
            terminal.innerHTML += "<br>";
            i++;
            j = 0;
            setTimeout(typeLine, 400);
        }
    }
}

typeLine();
