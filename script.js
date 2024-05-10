// Get all the buttons
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');

// Create an audio element for each button
const sounds = {
  applause: new Audio('sounds/applause.mp3'),
  boo: new Audio('sounds/boo.mp3'),
  gasp: new Audio('sounds/gasp.mp3'),
  tada: new Audio('sounds/tada.mp3'),
  victory: new Audio('sounds/victory.mp3'),
  wrong: new Audio('sounds/wrong.mp3')
};

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Stop all sounds
    for (let sound in sounds) {
      sounds[sound].pause();
      sounds[sound].currentTime = 0;
    }

    // Play the sound associated with the button
    sounds[button.textContent].play();
  });
});

stopButton.addEventListener('click', () => {
  // Stop all sounds
  for (let sound in sounds) {
    sounds[sound].pause();
    sounds[sound].currentTime = 0;
  }
});