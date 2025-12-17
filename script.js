const card = document.querySelector('.card');
const container = document.querySelector('.container');

function toggleCard() {
    card.classList.toggle('open');
    container.classList.toggle('enlarged');

    if (card.classList.contains('open')) {
        container.style.animation = 'none';

        setTimeout(() => {
            fireConfetti();
        }, 500);
    } else {
        setTimeout(() => {
            container.style.animation = 'float 3s ease-in-out infinite';
        }, 1000);
    }
}

function fireConfetti() {
    var count = 200;
    var defaults = {
        origin: {y: 0.7}
    };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    fire(0.25, {spread: 26, startVelocity: 55});
    fire(0.2, {spread: 60});
    fire(0.35, {spread: 100, decay: 0.91, scalar: 0.8});
    fire(0.1, {spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2});
    fire(0.1, {spread: 120, startVelocity: 45});
}

function createStamps(containerSelector, emojis, count, opacity) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    for (let i = 0; i < count; i++) {
        const stamp = document.createElement('div');
        stamp.className = 'stamp';
        stamp.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        const top = Math.random() * 100;
        const left = Math.random() * 100;

        const size = Math.floor(Math.random() * 15) + 20; // 20px to 35px

        const rotation = Math.floor(Math.random() * 360);

        stamp.style.top = `${top}%`;
        stamp.style.left = `${left}%`;
        stamp.style.fontSize = `${size}px`;
        stamp.style.opacity = opacity;
        stamp.style.transform = `rotate(${rotation}deg)`;

        container.appendChild(stamp);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    createStamps('#background-stamps', ['🎂', '🎈', '🎁', '🎉', '🍰', '🕯️', '🎊', '✨'], 40, 0.2);
});
