//your JS code here. If required.
let currentAudio = null; // to keep track of the current audio

document.addEventListener("click", function(event) {
    if (event.target.className === "btn") {
        let soundName = event.target.textContent;
        if (currentAudio) {
            currentAudio.pause(); // stop the current audio before starting a new one
        }
        currentAudio = new Audio(`sounds/${soundName}.mp3`);
        currentAudio.play();
    } else if (event.target.className === "stop" && currentAudio) {
        currentAudio.pause();
        currentAudio = null; // reset the current audio
    }
});