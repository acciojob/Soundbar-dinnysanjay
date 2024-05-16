var audio;

function playSound(filename) {
    if(audio) {
        audio.pause();
    }
    audio = new Audio(`sounds/${filename}`);
    audio.play();
}

function stopSound() {
    if(audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn");
    const stopButton = document.querySelector(".stop");
    let audio = null;

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const soundName = this.getAttribute("data-sound");
            playSound(soundName);
        });
    });

    stopButton.addEventListener("click", function() {
        stopSound();
    });

    function playSound(soundName) {
        if (audio !== null) {
            audio.pause();
        }
        audio = new Audio('sounds/' + soundName);
        audio.play();
    }

    function stopSound() {
        if (audio !== null) {
            audio.pause();
            audio = null;
        }
    }
});