function togglePlayPause() {
    var audio = document.getElementById('audioPlayer');
    var button = document.querySelector('.music-button'); // Assuming it's the only button, else use a class or id selector
    if (audio.paused) {
        audio.play();
        button.innerHTML = 'Music ON';
    } else {
        audio.pause();
        button.innerHTML = 'Music OFF';
    }
}
