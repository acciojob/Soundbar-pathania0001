const player = document.getElementById("player");
const buttons = document.querySelectorAll("#buttons button"); // ✅ selects all buttons

console.log(buttons)
buttons.forEach((button)=>{
		button.onclick=(e)=>{
		const {name} = e.target;
			 if (name === "stop") {
      player.pause();
      player.currentTime = 0;
      return;
    }
		player.pause();
		
		player.src = `./sounds/${name}.mp3`;
		player.play();
	}
})