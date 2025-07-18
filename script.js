const player = document.getElementById("player");
const buttons = document.querySelectorAll("#buttons button"); // ✅ selects all buttons

console.log(buttons)
buttons.forEach((button)=>{
		button.onclick=(e)=>{
		const {name} = e.target;
		player.pause();
		if(name==="stop")
			return;
		player.src = `/sounds/${name}/.mp3`;
		player.play();
	}
})