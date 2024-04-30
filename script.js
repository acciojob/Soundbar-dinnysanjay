//your JS code here. If required.
document.addEventListener("click", function(event) {
    if (event.target.className === "btn") {
        let soundName = event.target.textContent; // get the name of the sound
        let audio = new Audio(`sounds/${soundName}.mp3`); // create a new audio object
        audio.play(); // play the audio
    } else if (event.target.className === "stop") {
        // To stop all sounds, you can pause all audio elements on the page
        let audios = document.getElementsByTagName('audio'); // get all audio elements
        for(let i=0; i<audios.length; i++) {
            audios[i].pause(); // pause each audio
        }
    }
});