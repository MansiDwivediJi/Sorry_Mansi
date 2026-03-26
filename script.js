window.onload = function () {

    // ===== SELECT ELEMENTS =====
    const floating = document.querySelector(".floating");
    const celebration = document.querySelector(".celebration");
    const moveRandom = document.querySelector("#move-random");

    // =========================
    // ❤️ FLOATING HEARTS
    // =========================
    if (floating) {
        function createElement() {
            const el = document.createElement("span");

            const items = ["❤️", "🌹", "💖", "💕"];
            el.innerText = items[Math.floor(Math.random() * items.length)];

            el.style.left = Math.random() * 100 + "vw";
            el.style.fontSize = Math.random() * 20 + 15 + "px";
            el.style.animationDuration = Math.random() * 5 + 5 + "s";

            floating.appendChild(el);
            setTimeout(() => el.remove(), 10000);
        }

        setInterval(createElement, 500);
    }

    // =========================
    // 🎉 CELEBRATION
    // =========================
    if (celebration) {

        function createCelebration() {
            const el = document.createElement("span");
            const items = ["🎉", "🎊", "❤️", "💖", "😘", "💋"];

            el.innerText = items[Math.floor(Math.random() * items.length)];
            el.style.left = Math.random() * 100 + "vw";
            el.style.fontSize = Math.random() * 25 + 20 + "px";
            el.style.animationDuration = Math.random() * 3 + 3 + "s";

            celebration.appendChild(el);
            setTimeout(() => el.remove(), 5000);
        }

        function createBalloon() {
            const el = document.createElement("span");
            el.innerText = "🎈";

            el.style.left = Math.random() * 100 + "vw";
            el.style.fontSize = Math.random() * 30 + 30 + "px";
            el.style.animationDuration = Math.random() * 4 + 4 + "s";

            celebration.appendChild(el);
            setTimeout(() => el.remove(), 6000);
        }

        function createConfetti() {
            const el = document.createElement("span");
            const items = ["✨", "🎊", "💥", "🌟"];

            el.innerText = items[Math.floor(Math.random() * items.length)];
            el.style.left = Math.random() * 100 + "vw";
            el.style.fontSize = Math.random() * 15 + 10 + "px";
            el.style.animationDuration = Math.random() * 2 + 2 + "s";

            celebration.appendChild(el);
            setTimeout(() => el.remove(), 4000);
        }

        setInterval(createCelebration, 200);
        setInterval(createBalloon, 400);
        setInterval(createConfetti, 100);
    }

    
// =========================
// 💨 NO BUTTON MOVE
// =========================
function moveRandomEl(elm) {
    elm.style.position = "absolute";

    // controlled movement (center area)
    elm.style.top = Math.floor(Math.random() * 80 + 10) + "%";
    elm.style.left = Math.floor(Math.random() * 80 + 10) + "%";
}

if (moveRandom) {

    // 💻 Desktop
    moveRandom.addEventListener("mouseenter", function (e) {
        moveRandomEl(e.target);
    });

    // 📱 Mobile
    moveRandom.addEventListener("touchstart", function (e) {
        e.preventDefault();
        moveRandomEl(e.target);
    });
}
    document.addEventListener("click", function () {
    const audio = document.getElementById("bg-music");

    if (audio && audio.paused) {
        audio.play();
    }
});

};
