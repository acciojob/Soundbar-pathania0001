const player = ducument.getElementBy("player");
const buttons = document.getElementBy("buttons");

buttons.forEach((button)=>{
	i	button.onclick=(e)=>{
		const {name} = e.target;
		player.stop();
		if(name==="stop")
			return;
		player.src = `/sounds/${name}/.mp3`;
		player.play();
	}
})