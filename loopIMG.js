const imageSet2 = [
    "Without_playlist.png",
    "With_playlist.png"
];

const loopBtn2 = document.getElementById("loop-img-btn2");
var imgForLoop2 = document.getElementById("imgForLoop2");

// 1 because default is 0, click to apply 1. then alter.
let index2 = 1;

loopBtn2.addEventListener("click", () => {
    imgForLoop2.setAttribute("src", "./img/" + imageSet2[index2]);
    index2++;
    
    if (index2 >= imageSet2.length) {
        index2 = 0;
    }
});

