const crsr = document.querySelector('.cursor');

document.addEventListener("mousemove", function (e) {
    crsr.style.left = e.clientX + "px";
    crsr.style.top = e.clientY + "px";
});

document.querySelectorAll('a, .card, .skills span, h1').forEach(function (el) {
    el.addEventListener("mouseenter", function () { crsr.classList.add("grow"); });
    el.addEventListener("mouseleave", function () { crsr.classList.remove("grow"); });
});



const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function scramble(el) {

    if (!el.dataset.text) {
        el.dataset.text = el.innerText;
    }
    const text = el.dataset.text;


    clearInterval(el._interval);

    let iteration = 0;

    el._interval = setInterval(function () {
        const str = text.split("").map(function (char, index) {
            if (index < iteration || char === " " || char === "\n") {
                return char;
            }
            return characters[Math.floor(Math.random() * characters.length)];
        }).join("");

        el.innerText = str;
        iteration += 0.4;


        if (iteration >= text.length) {
            el.innerText = text;
            clearInterval(el._interval);
        }
    }, 30);
}


scramble(document.querySelector('#home h1'));
scramble(document.querySelector('#home p.small'));


document.querySelectorAll('.links a, h2, .card h3, #home h1').forEach(function (el) {
    el.addEventListener("mouseenter", function () {
        scramble(el);
    });
});