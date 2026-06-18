// WAIT UNTIL PAGE LOADS
window.onload = function () {

    // MATRIX SETUP
    const canvas = document.getElementById("matrix");
    const ctx = canvas.getContext("2d");

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    const drops = new Array(columns).fill(1);

    function draw() {
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

    setInterval(draw, 35);

    // TERMINAL FIX
    const terminal = document.getElementById("typing");

    const lines = [
        "> Initializing REVERSE X SYSTEM...",
        "> Loading modules...",
        "> Connecting secure server...",
        "> Access granted.",
        "> Welcome Operator."
    ];

    let line = 0;
    let char = 0;

    function type() {
        if (line < lines.length) {
            if (char < lines[line].length) {
                terminal.innerHTML += lines[line].charAt(char);
                char++;
                setTimeout(type, 25);
            } else {
                terminal.innerHTML += "<br>";
                line++;
                char = 0;
                setTimeout(type, 500);
            }
        }
    }

    type();
};
