const player = document.getElementById("player");
const buttons = document.querySelectorAll("#buttons button");


buttons.forEach((button) => {
  button.onclick = (e) => {
    const { name } = e.target;
    player.pause();
    if (name === "stop") {
      player.removeAttribute('src'); // Clear src
      return;
    }
    player.src = `./sounds/${name}.mp3`;
    player.play().catch((err) => {
      console.error(`Error playing ${name}.mp3:`, err);
    });
  };
});
