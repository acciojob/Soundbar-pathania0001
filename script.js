// Array of sound names (without extension)
const sounds = ['applause', 'boo', 'gasp'];

const buttonsContainer = document.getElementById('buttons');

// Create a button for each sound
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  btn.onclick = () => {
    stopSounds(); // stop others
    const audio = new Audio(`./sounds/${sound}.mp3`);
    audio.play();
    // store reference if you want to stop this later
    currentAudio = audio;
  };
  buttonsContainer.appendChild(btn);
});

// Stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.innerText = 'Stop';
stopBtn.onclick = () => {
  stopSounds();
};
buttonsContainer.appendChild(stopBtn);

// Keeps track of current playing audio
let currentAudio = null;

function stopSounds() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}
