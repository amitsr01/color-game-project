const box = document.getElementById('color-box');
const options = document.getElementById('options');
const message = document.getElementById('message');

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function startGame() {
    message.textContent = "";
    options.innerHTML = "";
    const targetColor = getRandomColor();
    box.style.backgroundColor = targetColor;

    // Create 3 buttons, one is the correct color
    const correctIdx = Math.floor(Math.random() * 3);
    for (let i = 0; i < 3; i++) {
        const btn = document.createElement('button');
        const color = (i === correctIdx) ? targetColor : getRandomColor();
        btn.style.backgroundColor = color;
        btn.onclick = () => {
            if (color === targetColor) {
                message.textContent = "Correct!";
                setTimeout(startGame, 1000);
            } else {
                message.textContent = "Try again!";
            }
        };
        options.appendChild(btn);
    }
}

startGame();