document.addEventListener('scroll', function() {
    var scrollPosition = scrollY;
    var windowHeight = window.innerHeight;

    // Example logic for a single bubble
    var bubble1 = document.getElementById('bubble1');
    var bubble2 = document.getElementById('bubble2');

    // Adjust these values based on desired behavior
    var startShowingAt = 0; // When to start showing the bubble
    var stopShowingAt = window.innerHeight; // When to fully hide the bubble

    // Adjust bubble 1 based on scroll
    if (scrollPosition > startShowingAt && scrollPosition < stopShowingAt) {
        var opacity = (scrollPosition - startShowingAt) / (stopShowingAt - startShowingAt);
        bubble1.style.opacity = opacity;
        bubble1.style.transform = `translateY(${20 - opacity * 40}px)`; // Move up then down
    } else if (scrollPosition <= startShowingAt) {
        bubble1.style.opacity = 0;
    } else {
        bubble1.style.opacity = 0;
    }

    // Repeat or adjust logic for bubble2 and others as needed
    if (scrollPosition > startShowingAt && scrollPosition < stopShowingAt) {
        var opacity = (scrollPosition - startShowingAt) / (stopShowingAt - startShowingAt);
        bubble2.style.opacity = opacity;
        bubble2.style.transform = `translateY(${20 - opacity * 40}px)`; // Move up then down
    } else if (scrollPosition <= startShowingAt) {
        bubble2.style.opacity = 0;
    } else {
        bubble2.style.opacity = 0;
    }
});
