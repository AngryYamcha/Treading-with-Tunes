function togglePlayPause() {
    var audio = document.getElementById('audioPlayer');
    var button = document.querySelector('button'); // Assuming it's the only button, else use a class or id selector
    if (audio.paused) {
        audio.play();
        button.innerHTML = 'Music On';
    } else {
        audio.pause();
        button.innerHTML = 'Music Off';
    }
}
