const rockBtn = document.querySelector('.rock-btn');
const asianPopBtn = document.querySelector('.asian-pop-btn');
const rnbBtn = document.querySelector('.rnb-btn-clicked');
const edmBtn = document.querySelector('.edm-btn');
const altIndieBtn = document.querySelector('.alt-indie-btn');
const folkBtn = document.querySelector('.folk-btn');
const popBtn = document.querySelector('.pop-btn-clicked');

// const toggleBtns = [
//     rockBtn,
//     asianPopBtn,
//     rnbBtn,
//     edmBtn,
//     altIndieBtn,
//     folkBtn,
//     popBtn
// ]

const imageSet2 = [
    "Without_playlist.png",
    "With_playlist.png"
];

const loopBtn = document.querySelector(".loop-img-btn");
const loopBtn2 = document.querySelector(".loop-img-btn2");
var imgForLoop2 = document.getElementById("imgForLoop2");

// 1 because default is 0, click to apply 1. then alter.

loopBtn.addEventListener("click", () => {
    imgForLoop2.setAttribute("src", "./img/" + imageSet2[0]);
});

loopBtn.addEventListener("click", function() {
    if (this.classList.contains("loop-btn-style")) {
        this.classList.toggle("loop-btn-selected");
        loopBtn2.classList.toggle("loop-btn-selected");
        this.classList.toggle("loop-btn-style");
        loopBtn2.classList.toggle("loop-btn-style");
    };
});

loopBtn2.addEventListener("click", () => {
    imgForLoop2.setAttribute("src", "./img/" + imageSet2[1]);
});

loopBtn2.addEventListener("click", function() {
    if (this.classList.contains("loop-btn-style")) {
        this.classList.toggle("loop-btn-selected");
        loopBtn.classList.toggle("loop-btn-selected");
        this.classList.toggle("loop-btn-style");
        loopBtn.classList.toggle("loop-btn-style");
    };
});

// btns

rockBtn.addEventListener('click', function() {
    // Toggle the 'button-clicked' class on click
    this.classList.toggle('rock-btn-clicked');
    this.classList.toggle('rock-btn');
    document.querySelector('.rock-img').classList.toggle('hidden');
});

asianPopBtn.addEventListener('click', function() {
    // Toggle the 'button-clicked' class on click
    this.classList.toggle('asian-pop-btn-clicked');
    this.classList.toggle('asian-pop-btn');
    document.querySelector('.asian-pop-img').classList.toggle('hidden');
});

rnbBtn.addEventListener('click', function() {
    // Toggle the 'button-clicked' class on click
    this.classList.toggle('rnb-btn-clicked');
    this.classList.toggle('rnb-btn');
    document.querySelector('.rnb-img').classList.toggle('hidden');
});

edmBtn.addEventListener('click', function() {
    // Toggle the 'button-clicked' class on click
    this.classList.toggle('edm-btn-clicked');
    this.classList.toggle('edm-btn');
    document.querySelector('.edm-img').classList.toggle('hidden');
});

altIndieBtn.addEventListener('click', function() {
    // Toggle the 'button-clicked' class on click
    this.classList.toggle('alt-indie-btn-clicked');
    this.classList.toggle('alt-indie-btn');
    document.querySelector('.alt-indie-img').classList.toggle('hidden');
});

folkBtn.addEventListener('click', function() {
    // Toggle the 'button-clicked' class on click
    this.classList.toggle('folk-btn');
    this.classList.toggle('folk-btn-clicked');
    document.querySelector('.folk-img').classList.toggle('hidden');
});

popBtn.addEventListener('click', function() {
    // Toggle the 'button-clicked' class on click
    this.classList.toggle('pop-btn-clicked');
    this.classList.toggle('pop-btn');
    document.querySelector('.pop-img').classList.toggle('hidden');
});