const imageSet2 = [
    "Without_playlist.png",
    "With_playlist.png"
];

const loopBtn2 = document.getElementById("loop-img-btn2");
var imgForLoop2 = document.getElementById("imgForLoop2");

let index2 = 0;

loopBtn2.addEventListener("click", () => {
    imgForLoop2.setAttribute("src", "./img/" + imageSet2[index2]);
    index2++;
    
    if (index2 >= imageSet2.length) {
        index2 = 0;
    }
});

